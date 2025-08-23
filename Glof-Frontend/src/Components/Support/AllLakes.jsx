import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";

function AllLakes() {
  const [lakes, setLakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLakes = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("Please log in to view the lakes data.");
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        if (decoded && decoded.name) setFullName(decoded.name);
        else setFullName("User");

        const response = await axios.get(
          "https://glof-sentinel-backend.onrender.com/api/lakes",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLakes(response.data);
      } catch (error) {
        console.error("Error fetching lakes data:", error.response || error);
        alert("Failed to fetch lakes data. Please login again.");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchLakes();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if (loading) return <p className="text-center py-10">Loading lakes data...</p>;

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Log Out
        </button>
      </div>

      <div
        className="relative h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl font-extrabold z-10 drop-shadow-lg text-center px-4">
           {fullName}, Welcome to GLOF Lake Monitoring
        </h1>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/recent-alerts"
          className="inline-block text-cyan-600 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-lg font-semibold shadow-md border-2 border-cyan-600 hover:bg-cyan-600 hover:text-white transition duration-300"
        >
          View Recent Alerts
        </Link>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">All Lakes</h2>
        {lakes.length === 0 ? (
          <p className="text-center text-gray-600">No lakes data available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
              <thead className="bg-cyan-600 text-white">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                  <th className="border border-gray-300 px-4 py-2">Temperature (°C)</th>
                  <th className="border border-gray-300 px-4 py-2">Pressure (hPa)</th>
                  <th className="border border-gray-300 px-4 py-2">Last Updated</th>
                  <th className="border border-gray-300 px-4 py-2">Latitude</th>
                  <th className="border border-gray-300 px-4 py-2">Longitude</th>
                </tr>
              </thead>
              <tbody>
                {lakes.map((lake) => (
                  <tr key={lake._id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{lake.name}</td>
                    <td
                      className={`border border-gray-300 px-4 py-2 font-semibold ${
                        lake.status === "NORMAL"
                          ? "text-green-700"
                          : lake.status === "WARNING"
                          ? "text-orange-400"
                          : lake.status === "CRITICAL"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {lake.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{lake.temperature}</td>
                    <td className="border border-gray-300 px-4 py-2">{lake.pressure}</td>
                    <td className="border border-gray-300 px-4 py-2">{new Date(lake.lastUpdated).toLocaleString()}</td>
                    <td className="border border-gray-300 px-4 py-2">{lake.latitude}</td>
                    <td className="border border-gray-300 px-4 py-2">{lake.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllLakes;
