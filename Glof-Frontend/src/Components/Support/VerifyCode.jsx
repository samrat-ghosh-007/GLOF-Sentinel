import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VerifyCode({ userId }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");  // success or error
  const navigate = useNavigate();

  useEffect(() => {
    if (messageType === "success") {
      // Redirect to login page after 2 seconds delay
      const timer = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageType, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage("User ID not found. Please sign up again.");
      setMessageType("error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        userId,
        otp: code,
      });

      setMessage(response.data.message);
      if (response.data.message === "Email verified successfully") {
        setMessageType("success");
      } else {
        setMessageType("error");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Verification failed");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
        
        {message && (
          <div
            className={`mb-4 p-3 rounded text-center ${
              messageType === "success" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
            }`}
            role="alert"
          >
            {messageType === "success"
              ? "Email verified successfully. Redirecting to login..."
              : message}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            disabled={messageType === "success"}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            disabled={messageType === "success"}
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyCode;
