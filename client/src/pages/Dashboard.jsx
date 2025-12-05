import { useEffect, useState } from "react";
import api from "../api/axios";

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
    <div className="p-8 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="p-6 bg-blue-100 border rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">{stats.total}</h2>
          <p className="text-gray-700">Total Complaints</p>
        </div>

        <div className="p-6 bg-green-100 border rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">{stats.resolved}</h2>
          <p className="text-gray-700">Resolved</p>
        </div>

        <div className="p-6 bg-yellow-100 border rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold">{stats.pending}</h2>
          <p className="text-gray-700">Pending</p>
        </div>

      </div>

    </div>
  );
}
