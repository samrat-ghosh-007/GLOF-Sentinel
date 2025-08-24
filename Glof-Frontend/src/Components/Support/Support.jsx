import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Mountaintwo from "../../images/glof2.jpg";

function Support() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu open/close for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a menu item (optional)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-cyan-700 to-blue-500 px-4 md:px-8 py-4 flex items-center justify-between shadow-md z-20 relative">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 flex-shrink-0 text-white">
          <span className="text-3xl select-none">🌊</span>
          <span className="font-bold text-lg tracking-wide select-none">
            GLOF Early Warning System
          </span>
        </div>

        {/* Hamburger button - shown on small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/overview"
            className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
          >
            Overview
          </Link>
          <Link
            to="/recent-alerts"
            className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
          >
            Recent Alerts
          </Link>
          <Link
            to="/historical-reports"
            className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
          >
            Historical Reports
          </Link>
          <Link
            to="/login"
            className="ml-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-5 py-2 rounded shadow transition backdrop-blur text-center"
          >
            LOGIN
          </Link>
        </div>

        {/* Mobile Menu - shown when hamburger menu is open */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-gradient-to-b from-cyan-700 to-blue-500 rounded-md shadow-lg z-30 md:hidden flex flex-col">
            <Link
              to="/overview"
              onClick={closeMenu}
              className="px-4 py-3 border-b border-white/20 text-white font-medium hover:bg-cyan-600 transition cursor-pointer"
            >
              Overview
            </Link>
            <Link
              to="/recent-alerts"
              onClick={closeMenu}
              className="px-4 py-3 border-b border-white/20 text-white font-medium hover:bg-cyan-600 transition cursor-pointer"
            >
              Recent Alerts
            </Link>
            <Link
              to="/historical-reports"
              onClick={closeMenu}
              className="px-4 py-3 border-b border-white/20 text-white font-medium hover:bg-cyan-600 transition cursor-pointer"
            >
              Historical Reports
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="px-4 py-3 text-left text-white font-semibold hover:bg-cyan-600 transition rounded-b-md cursor-pointer"
            >
              LOGIN
            </Link>
          </div>
        )}
      </nav>

      {/* Background Image & Content */}
      <div className="flex-1 relative flex items-center justify-center">
        <img
          src={Mountaintwo}
          alt="Mountain"
          className="absolute inset-0 w-full h-full object-cover brightness-80 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md">
            Welcome to GLOF Early Warning System
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Support;
