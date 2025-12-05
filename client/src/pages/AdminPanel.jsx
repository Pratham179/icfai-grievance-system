import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  async function fetchComplaints() {
    try {
      const res = await api.get("/admin/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.log("Error loading complaints", err);
    }
  }

  async function updateStatus(id, status) {
    try {
      await api.put(`/admin/complaints/${id}/status`, { status });
      fetchComplaints(); // refresh UI
    } catch (err) {
      console.log("Status update error", err);
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin – All Complaints</h1>

      <div className="overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Branch</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Complaint</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c._id} className="text-center">
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.branch}</td>
                <td className="border p-2">{c.category}</td>
                <td className="border p-2 max-w-xs break-words">{c.complaint}</td>

                <td className="border p-2">
                  <span
                    className={`px-3 py-1 rounded text-white ${
                      c.status === "resolved"
                        ? "bg-green-600"
                        : c.status === "in-progress"
                        ? "bg-yellow-600"
                        : "bg-red-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="border p-2">
                  <select
                    className="border p-1 rounded"
                    value={c.status}
                    onChange={(e) => updateStatus(c._id, e.target.value)}
                  >
                    <option value="open">Open</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {complaints.length === 0 && (
          <p className="text-center mt-4 text-gray-600">No complaints found.</p>
        )}
      </div>
    </div>
  );
}
