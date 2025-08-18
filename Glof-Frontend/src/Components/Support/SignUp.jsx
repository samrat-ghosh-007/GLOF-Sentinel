import React from "react";
import backgroundImage from "../../images/glof2.jpg"; 

// Indian States List
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
      {/* Signup form container */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-md z-10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create an Account
        </h1>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-cyan-400"
          />
          
          
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                       text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                       focus:ring-cyan-400"
          />



          {/* Select State Dropdown */}
          <select

              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                        text-white placeholder-gray-300 focus:outline-none focus:ring-2 
                        focus:ring-cyan-400"
              defaultValue=""
              required
              style={{ maxHeight: "150px", overflowY: "auto" }}
            >
              <option value="" disabled>
                Select State
              </option>

              {indianStates.map(state => (
                <option key={state} value={state} className="text-gray-900">
                  {state}
                </option>
              ))}
          </select>






          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 
                       rounded-lg shadow-md transition"
          >
            SIGN UP
          </button>
        </form>
        {/* Link to login */}
        <p className="text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:text-cyan-300 no-underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
