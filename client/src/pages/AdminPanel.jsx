import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await api.get("/complaints/admin/all");
      setComplaints(res.data);
    }
    load();
  }, []);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Tracking ID</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((c, i) => (
            <tr key={i} className="border">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.category}</td>
              <td className="p-2 border">{c.status}</td>
              <td className="p-2 border">{c.trackingId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
