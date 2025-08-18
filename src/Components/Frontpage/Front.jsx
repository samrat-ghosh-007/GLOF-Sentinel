import React from "react";
import { Link } from "react-router-dom";
import frontMountain from "../../images/front_mountain.jpg"; 

function Front() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <img
        src={frontMountain}
        alt="Mountain background"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-45 animate-moveBackground"
      />

      
      

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 text-center">
          GLOF Early Warning System
        </h1>
        <button className="bg-cyan-400 hover:bg-cyan-600 transition text-white font-semibold px-8 py-3 rounded-full text-lg">
          GET IN
        </button>
      </div>

      {/* Header links */}
      <div className="absolute top-6 right-10 z-20 flex gap-8">
  <Link
  to="/contact"
  className="text-white font-semibold hover:text-shadow-lg hover:text-cyan-300"
>
  CONTACT
</Link>

<Link
  to="/support"
  className="text-white font-semibold hover:text-shadow-lg hover:text-cyan-300"
>
  SUPPORT
</Link>

      </div>
    </div>
  );
}

export default Front;
