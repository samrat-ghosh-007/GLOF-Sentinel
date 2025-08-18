import React from "react";
import { Link } from "react-router-dom"; 
import backgroundImage from "../../images/glof2.jpg"; 

function Login() {
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
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Login form container */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Glof Early Warning System Login
        </h1>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-cyan-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 
                       rounded-lg shadow-md transition"
          >
            LOGIN
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-cyan-400 hover:text-cyan-300 no-underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
