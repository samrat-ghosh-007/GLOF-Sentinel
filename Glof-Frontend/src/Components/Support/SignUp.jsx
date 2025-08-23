import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../../images/glof2.jpg";
import { useNavigate } from "react-router-dom"; // ← added import

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const [userId, setUserId] = useState(null);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [isRegistered, setIsRegistered] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  const navigate = useNavigate(); // ← initialize

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long!");
      setMessageType("error");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setMessageType("error");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: fullName,
        email,
        password,
        state,
      });
      setMessage("Registration successful! Please check your email for the verification code.");
      setMessageType("success");
      setIsRegistered(true);
      setUserId(res.data.userId);
      // Clear inputs
      setFullName("");
      setPassword("");
      setConfirmPassword("");
      setState("");
    } catch (error) {
      const errMsg = error.response?.data?.message || "Registration failed! Please try again.";
      setMessage(errMsg);
      setMessageType("error");
    }
  };

  // Handle OTP verification and redirect after success or already verified
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!userId) {
      setMessage("User ID is missing. Please register again.");
      setMessageType("error");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        userId,
        otp: verificationCode,
      });
      setMessage(res.data.message);
      setMessageType("success");
      setVerificationCode("");
      // Check for backend message and redirect after success or already verified
      if (
        res.data.message &&
        (res.data.message.toLowerCase().includes("already verified") ||
         res.data.message.toLowerCase().includes("success"))
      ) {
        setTimeout(() => {
          navigate("/login");
        }, 1500); // 1.5 seconds to show message before redirect
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Verification failed! Please try again.";
      setMessage(errMsg);
      setMessageType("error");
    }
  };

  // Handle OTP resend
  const handleResendOTP = async () => {
    setIsResending(true);
    setResendMessage("");
    try {
      await axios.post("http://localhost:5000/api/auth/resend-otp", { email });
      setResendMessage("OTP has been resent. Please check your email.");
    } catch (error) {
      setResendMessage("Failed to resend OTP. Please try again.");
    }
    setIsResending(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md z-10"
        role="main"
        aria-label="Sign up and verify form"
      >
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          {isRegistered ? "Verify Your Email" : "Create an Account"}
        </h1>

        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-center font-medium ${
              messageType === "success"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
            role="alert"
          >
            {messageType === "success" && isRegistered
              ? `${message} Redirecting to login...`
              : message}
          </div>
        )}

        {!isRegistered ? (
          <form className="space-y-5" onSubmit={handleRegister} noValidate>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoComplete="name"
            />

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />

            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />

            <select
              id="state"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              <option value="" disabled>
                Select State
              </option>
              {indianStates.map((stateItem) => (
                <option key={stateItem} value={stateItem} className="text-gray-900">
                  {stateItem}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
              SIGN UP
            </button>
          </form>
        ) : (
          <form className="space-y-5" onSubmit={handleVerifyCode} noValidate>
            <input
              id="verificationCode"
              type="text"
              placeholder="Enter Verification Code"
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
              VERIFY EMAIL
            </button>

            <button
              type="button"
              onClick={handleResendOTP}
              disabled={isResending}
              className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </button>

            {resendMessage && (
              <p className="text-center mt-2 text-sm text-white">{resendMessage}</p>
            )}
          </form>
        )}

        {!isRegistered && (
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400 hover:text-cyan-300 no-underline">
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUp;
