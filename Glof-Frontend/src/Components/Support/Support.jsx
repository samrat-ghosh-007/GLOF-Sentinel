import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import Mountaintwo from "../../images/glof2.jpg"; 
import Login from "./Login";

function Support() {
   const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-cyan-700 to-blue-500 px-8 py-4 flex items-center justify-between shadow-md z-20">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Logo (waves icon, use emoji or svg or replace with actual logo) */}
          <span className="text-white text-3xl">🌊</span>
          <span className="text-white font-bold text-lg tracking-wide">
            GLOF Early Warning System
          </span>
        </div>


        {/* Nav links */}
        <div className="flex gap-8 items-center">
          

          <Link
  to="/overview"
  className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
>
  Overview
</Link>
          <a href="#" className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition">
            Recent Alerts
          </a>
          <Link
            to="/historical-reports"
            className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
          >
            Historical Reports
          </Link>
          <button
      onClick={() => navigate("/login")}
      className="ml-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-5 py-2 rounded shadow transition backdrop-blur"
    >
      LOGIN
    </button>
        </div>
      </nav>

      {/* Background Image & Content */}
      <div className="flex-1 relative flex items-center justify-center">
        {/* Background image */}
        <img
          src={Mountaintwo}
          alt="Mountain"
          className="absolute inset-0 w-full h-full object-cover brightness-80 z-0"
        />
        {/* overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

        {/* Welcome Text */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md text-center">
            Welcome to GLOF Early Warning System
          </h1>
           
        </div>
      </div>
    </div>
  );
}

export default Support;
