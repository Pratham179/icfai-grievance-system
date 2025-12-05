import { useEffect, useState } from "react";
import api from "../api/axios";
import { ChartBarIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    pending: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await api.get("/complaints/stats");
        setStats(res.data);
      } catch (err) {
        console.log("Error fetching stats:", err);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="max-w-5xl w-full">

        <h1 className="text-3xl font-bold mb-8 text-[#1E3A8A]">
          Complaint Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* Total Complaints */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex items-center gap-4">
              <ChartBarIcon className="h-12 w-12 opacity-80" />
              <div>
                <h2 className="text-4xl font-bold">{stats.total}</h2>
                <p className="text-sm opacity-90">Total Complaints</p>
              </div>
            </div>
          </div>

          {/* Resolved */}
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex items-center gap-4">
              <CheckCircleIcon className="h-12 w-12 opacity-80" />
              <div>
                <h2 className="text-4xl font-bold">{stats.resolved}</h2>
                <p className="text-sm opacity-90">Resolved</p>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex items-center gap-4">
              <ExclamationTriangleIcon className="h-12 w-12 opacity-80" />
              <div>
                <h2 className="text-4xl font-bold">{stats.pending}</h2>
                <p className="text-sm opacity-90">Pending</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
