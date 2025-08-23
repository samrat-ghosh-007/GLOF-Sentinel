import React, { useEffect, useState } from "react";
import axios from "axios";

function RecentAlert() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await axios.get("/api/alerts");
        setAlerts(response.data);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) return <p className="text-center py-6 text-gray-500">Loading recent alerts...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600 tracking-wide">
        Recent Alerts
      </h2>
      {alerts.length === 0 ? (
        <p className="text-center text-gray-600 italic">No recent alerts available.</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li
              key={alert._id}
              className="flex items-start space-x-4 p-4 border-2 rounded-lg
                border-red-400 bg-red-50 hover:bg-red-100 transition"
              role="alert"
              aria-live="polite"
            >
              {/* Alert Icon */}
              <svg
                className="w-6 h-6 flex-shrink-0 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M4.293 6.707a1 1 0 011.414 0L12 13.414l6.293-6.707a1 1 0 111.414 1.414L13.414 15l6.707 6.707a1 1 0 01-1.414 1.414L12 16.414l-6.707 6.707a1 1 0 01-1.414-1.414L10.586 15 4.293 8.707a1 1 0 010-1.414z"
                />
              </svg>

              {/* Alert Content */}
              <div className="flex-1">
                <p className="font-semibold text-red-700 mb-1 text-lg">{alert.title || "Alert"}</p>
                <p className="text-red-800 mb-2">{alert.message}</p>
                <p className="text-right text-xs text-gray-500 italic">
                  {new Date(alert.createdAt).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentAlert;
