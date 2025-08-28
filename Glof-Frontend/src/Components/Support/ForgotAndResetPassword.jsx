import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../../images/glof2.jpg";

function ForgotAndResetPassword() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.55)', // Dark overlay, adjust opacity as desired
    backdropFilter: 'blur(4px)',       // Makes the background hazy
    zIndex: 1,
  };

  const glassStyle = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    borderRadius: '16px',
    maxWidth: '400px',
    width: '100%',
    padding: '2rem',
    color: 'white',
    textShadow: '0 1px 4px rgba(0,0,0,0.45)',
  };

  // states, handlers (same as before)
  const [step, setStep] = useState('forgot');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Handlers remain unchanged ...

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot-password', { email });
      setMessage(res.data.message || 'Password reset OTP sent to your email.');
      setMessageType('success');
      setStep('reset');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to send password reset OTP.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("Passwords don't match!");
      setMessageType('error');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/reset-password', {
        email,
        otp,
        newPassword,
      });
      setMessage(res.data.message || 'Password reset successful! Redirecting to login...');
      setMessageType('success');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Password reset failed.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={glassStyle}>
        <h2 className="text-2xl font-bold mb-4 text-center">
          {step === 'forgot' ? 'Forgot Password' : 'Reset Password'}
        </h2>

        {message && (
          <div
            className={`p-3 mb-4 text-center rounded ${
              messageType === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        {step === 'forgot' ? (
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded mb-4 border text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded mb-4 border text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            />
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 rounded mb-4 border text-black"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              disabled={loading}
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 rounded mb-4 border text-black"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              disabled={loading}
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-2 rounded mb-4 border text-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded"
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotAndResetPassword;
