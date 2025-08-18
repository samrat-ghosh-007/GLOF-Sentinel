// src/Components/Overview.jsx
import React from "react";
import warningIllustration from "../../images/glof3.jpg"; 

function Overview() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 flex flex-col items-center px-6 py-16 overflow-hidden">

     
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Title */}
      <h1 className="relative text-5xl md:text-6xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-14 text-center drop-shadow-lg z-10">
        Glacial Lake Outburst Flood Early Warning System
      </h1>

      {/* Card container */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl z-10">

        {/* Card 1 */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-cyan-400 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
          <img
            src={warningIllustration}
            alt="System Illustration"
            className="w-full h-48 object-cover rounded-xl mb-6 shadow-md transition-transform duration-700 hover:scale-110"
          />
          <h2 className="text-2xl font-bold text-cyan-200 mb-2">What is a GLOF?</h2>
          <p className="text-cyan-100 text-center leading-relaxed">
            A <strong>Glacial Lake Outburst Flood (GLOF)</strong> is a sudden, powerful release of water from a glacier-fed lake, triggered by melting ice, avalanches, landslides, or heavy rainfall. These floods pose major risks to downstream communities and ecosystems, often causing rapid destruction.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-cyan-400 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-cyan-200 mb-2">Why Early Warning?</h2>
          <ul className="list-disc pl-4 text-cyan-100 mb-2 text-left">
            <li>Evacuates at-risk populations before disaster strikes</li>
            <li>Enables rapid emergency response and infrastructure protection</li>
            <li>Reduces casualties and property damage</li>
            <li>Empowers communities through preparedness drills</li>
          </ul>
          <p className="text-cyan-100 text-center mt-2">
            As climate change increases both glacier melt and torrential rainfall, Early Warning Systems are vital for protecting Himalayan regions and beyond.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-cyan-400 flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-cyan-200 mb-2">How Does It Work?</h2>
          <ul className="list-disc pl-4 text-cyan-100 mb-2 text-left">
            <li>Remote monitoring of glacial lakes via sensors and satellites</li>
            <li>Data-driven risk assessments and forecasting models</li>
            <li>Automated alerts sent to authorities and the public</li>
            <li>Community outreach, evacuation plans, and education</li>
          </ul>
          <p className="text-cyan-100 text-center mt-2">
            Modern GLOF EWS solutions combine cutting-edge technology with strong community engagement for maximal safety and resilience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
