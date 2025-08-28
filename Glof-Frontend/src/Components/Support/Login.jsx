import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import backgroundImage from "../../images/glof2.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("authToken", response.data.token);

      setMessage("Login successful!");
      setMessageType("success");

      setTimeout(() => {
        setMessage("");
        navigate("/dashboard"); // redirect after showing message
      }, 1200);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Invalid Credentials";
      setMessage(errorMsg);
      setMessageType("error");
      console.error("Login error:", error);
    }
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
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Glof Early Warning System Login
        </h1>

        {/* Message box */}
        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-center font-medium ${
              messageType === "success"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 no-underline">
            Register
          </Link>
        </p>

        <p className="text-center text-gray-300 mt-2">
          <Link to="/forgot-password" className="text-yellow-400 hover:text-yellow-300 no-underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
