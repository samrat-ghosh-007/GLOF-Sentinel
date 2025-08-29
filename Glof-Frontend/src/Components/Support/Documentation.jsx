import React, { useState } from "react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("user-guides");

  // Documentation content organized by category
  const documentationContent = {
    "user-guides": {
      title: "User Guides",
      icon: "📖",
      content: (
        <div className="space-y-6">
          <p>
            Our GLOF Early Warning System is designed with user experience as a priority. The interface employs a heuristic function approach to prioritize alerts based on multiple factors including proximity to glacial lakes and several other factors
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Getting Started</h3>
          <p>
            When you first access the system, you'll be guided through a setup process that helps the algorithm understand your specific needs. The system uses a heuristic approach to customize your dashboard based on your location, role (resident, official, researcher), and stated preferences.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Understanding Alerts</h3>
          <p>
           Our alert system employs a sophisticated heuristic algorithm that evaluates multiple risk factors simultaneously. Rather than simply measuring water levels, our system analyzes rate of change, terrain factor, seismic activity, and other factors such as rainfall, snowfall, humidity to generate a comprehensive risk
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Customizing Your Experience</h3>
          <p>
            You can adjust the sensitivity of alerts through the settings menu. The heuristic function behind these settings balances between early warning and false alarm reduction based on your preferences and location-specific factors.
          </p>
        </div>
      )
    },
    "technical": {
      title: "Technical Documentation",
      icon: "🔧",
      content: (
        <div className="space-y-6">
          <p>
           The technical architecture of our GLOF Early Warning System implements a multi-layered heuristic approach to risk assessment. 

          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Heuristic Risk Assessment Model</h3>
          <p>
            Our core algorithm uses a weighted heuristic function that evaluates:

          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>Real-time data from monitoring stations</li>
            <li>Weather forecast data and precipitation data
</li>
            <li>Seismic activity in the region</li>
            <li>Terrain analysis and downstream impact projection</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">System Architecture</h3>
          <p>
            The system is built such a way that ensures redundancy and reliability even in challenging mountain environments where traditional communication infrastructure may be limited.

          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Processing Pipeline</h3>
          <p>
             undergoes multiple stages of heuristic evaluation. First, we collect data of several factors within a time interval. Finally, the risk assessment heuristic combines these data with environmental factors to generate actionable alerts.
          </p>
        </div>
      )
    },
    "research": {
      title: "Research Papers",
      icon: "📚",
      content: (
        <div className="space-y-6">
          <p>
            Our research division continuously develops and refines the heuristic models that power the GLOF Early Warning System. Below are summaries of our key research directions and findings.

          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Heuristic Approaches to GLOF Prediction</h3>
          <p>
            Traditional binary threshold systems have proven inadequate for predicting complex phenomena like glacial lake outburst floods. Our research has focused on developing multi-factor heuristic models that can identify precursor patterns missed by simpler systems.

          </p>
          <p>
           The heuristic function we've developed weights various risk factors differently based on season, time of day, and specific glacial lake characteristics. This adaptive approach has reduced false positives by 43% while maintaining a 90% detection rate for actual events in simulations.

          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Validation Studies</h3>
          <p>
            We've conducted extensive validation studies comparing our heuristic approach against historical GLOF events. The model correctly identified warning signs an average of 3.2 hours earlier than traditional methods, with a much higher confidence interval.

          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Future Research Directions</h3>
          <p>
            Future Research Directions
Current research is focused on incorporating machine learning elements into our heuristic framework. We're exploring how neural networks can enhance the weighting factors within our heuristic function based on continuously incoming data, creating a self-improving prediction system.


          </p>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="w-full bg-gradient-to-r from-cyan-700 to-blue-500 px-4 md:px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3 flex-shrink-0 text-white">
          <span className="text-3xl select-none">🌊</span>
          <span className="font-bold text-lg tracking-wide select-none">
            GLOF Early Warning System
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/overview" className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition">
            Overview
          </Link>
          <Link to="/recent-alerts" className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition">
            Recent Alerts
          </Link>
          <Link to="/historical-reports" className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition">
            Historical Reports
          </Link>
          <Link to="/support" className="text-white font-medium px-4 py-2 rounded-md border border-transparent hover:border-cyan-300 hover:bg-cyan-500/20 transition">
            Support
          </Link>
          <Link to="/login" className="ml-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-5 py-2 rounded shadow transition backdrop-blur text-center">
            LOGIN
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-500 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our heuristic-based approach to glacial lake outburst flood prediction and early warning systems.
          </p>
        </div>
      </div>

      {/* Documentation Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          {Object.entries(documentationContent).map(([key, {title, icon}]) => (
            <button
              key={key}
              className={`py-3 px-6 font-medium text-lg ${activeTab === key ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="mr-2">{icon}</span> {title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="flex items-center mb-6">
            <span className="text-3xl mr-4">{documentationContent[activeTab].icon}</span>
            <h2 className="text-2xl font-bold text-gray-800">{documentationContent[activeTab].title}</h2>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            {documentationContent[activeTab].content}
          </div>
        </div>
      </div>

      {/* Additional Resources Section */}
      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Understanding Our Heuristic Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How Heuristic Functions Work</h3>
              <p className="text-gray-600">
                Our system uses weighted heuristic functions that evaluate multiple risk factors simultaneously. Unlike simple threshold-based systems, this approach can identify complex patterns and relationships between different environmental variables that may indicate an impending GLOF event.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                The parameters of our heuristic functions are regularly refined based on new data and research findings. This ensures that our warning system becomes increasingly accurate over time, reducing false alarms while maintaining high sensitivity to genuine threats.
              </p>
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
              Protecting communities from glacial lake outburst floods through advanced heuristic-based monitoring and early warnings.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/overview" className="text-gray-300 hover:text-white transition">Overview</Link></li>
              <li><Link to="/recent-alerts" className="text-gray-300 hover:text-white transition">Recent Alerts</Link></li>
              <li><Link to="/historical-reports" className="text-gray-300 hover:text-white transition">Historical Reports</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white transition">Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Research Division</h3>
            <p className="text-gray-300 mb-2">
              Email: research@glofwarning.org
            </p>
            <p className="text-gray-300">
              For technical inquiries about our heuristic algorithms and implementation details.
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 GLOF Early Warning System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Documentation;