import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Support() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize to detect mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      // Close menu when switching to desktop
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Sample background image (replace with your actual image import or URL)
  const Mountaintwo =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gradient-to-r from-cyan-700 to-blue-500 px-4 md:px-8 py-4 flex items-center justify-between shadow-md z-50 relative">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 flex-shrink-0 text-white">
          <span className="text-3xl select-none">🌊</span>
          <span className="font-bold text-lg tracking-wide select-none">
            GLOF Early Warning System
          </span>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-cyan-800 to-blue-600 shadow-lg z-40 md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-5 border-b border-cyan-600 flex justify-between items-center">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              className="text-white focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col p-5 space-y-4">
            <Link
              to="/overview"
              onClick={closeMenu}
              className="text-white font-medium px-4 py-3 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Overview
            </Link>
            <Link
              to="/recent-alerts"
              onClick={closeMenu}
              className="text-white font-medium px-4 py-3 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Recent Alerts
            </Link>
            <Link
              to="/historical-reports"
              onClick={closeMenu}
              className="text-white font-medium px-4 py-3 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition"
            >
              Historical Reports
            </Link>
            <Link
              to="/login"
              onClick={closeMenu}
              className="mt-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-5 py-3 rounded shadow transition backdrop-blur text-center"
            >
              LOGIN
            </Link>
          </div>
        </div>
      </nav>

      {/* Background Image & Content */}
      <div className="flex-1 relative flex items-center justify-center">
        <img
          src={Mountaintwo}
          alt="Mountain"
          className="absolute inset-0 w-full h-full object-cover brightness-80 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-md mb-6">
            Welcome to GLOF Early Warning System
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md mb-8">
            Our support team is here to help you with any questions about glacial
            lake outburst floods and our early warning system.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Contact Support
            </button>
            </Link>
            <Link to="/faq">
  <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
    FAQ
  </button>
</Link>
          </div>
        </div>
      </div>

      {/* Support Content Section */}
      <div className="relative z-20 bg-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            How Can We Help You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="text-blue-500 text-3xl mb-4">
                <i className="fas fa-question-circle"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                General Questions
              </h3>
              <p className="text-gray-600">
                Find answers to frequently asked questions about GLOF and our
                monitoring system.
              </p>
              <Link to="/faq">
  <button className="mt-4 text-blue-500 font-medium hover:text-blue-700 transition">
    View FAQs →
  </button>
</Link>
            </div>

            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-3xl mb-4">
                <i className="fas fa-book"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Documentation
              </h3>
              <p className="text-gray-600">
                Access user guides, technical documentation, and research papers.
              </p>
              <Link to="/doc">
  <button className="mt-4 text-green-500 font-medium hover:text-green-700 transition">
    Read Documentation →
  </button>
</Link>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg shadow-md">
              <div className="text-purple-500 text-3xl mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Us
              </h3>
              <p className="text-gray-600">
                Get in touch with our support team for personalized assistance.
              </p>
              <Link to="/contact">
  <button className="mt-4 text-purple-500 font-medium hover:text-purple-700 transition">
    Contact Support →
  </button>
</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">GLOF Early Warning System</h3>
            <p className="text-gray-300">
              Protecting communities from glacial lake outburst floods through advanced
              monitoring and early warnings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>
              </li>
              <li>
                  <Link to="/overview" className="text-gray-300 hover:text-white transition">
                  About
                  </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                  </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Climate Street,
              Mountain City
            </p>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-phone mr-2"></i> +1 (555) 123-4567
            </p>
            <p className="text-gray-300">
              <i className="fas fa-envelope mr-2"></i>{" "}
              <a href="mailto:support@glofwarning.org" className="hover:underline">
                support@glofwarning.org
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 GLOF Early Warning System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Support;
