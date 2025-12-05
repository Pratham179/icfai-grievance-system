import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
  const [complaints, setComplaints] = useState([]);
  const [selected, setSelected] = useState(null); // for modal

  // Fetch complaints
  const loadComplaints = async () => {
    try {
      const res = await api.get("/admin/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.log("Error loading complaints:", err);
    }
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  // Update complaint status
  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/complaints/${id}/status`, { status });
      loadComplaints(); // refresh list
    } catch (err) {
      console.log("Error updating:", err);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
        Admin – Complaint Management
      </h1>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border">

        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 border-b">
            <tr>
              <th className="p-3 text-left">Tracking ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr
                key={c._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-mono">{c.trackingId}</td>
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.category}</td>

                {/* STATUS BADGES */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs ${
                      c.status === "open"
                        ? "bg-yellow-600"
                        : c.status === "in-progress"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                {/* ACTION BUTTONS */}
                <td className="p-3 flex gap-2">

                  {/* View Button */}
                  <button
                    onClick={() => setSelected(c)}
                    className="px-3 py-1 rounded bg-gray-700 text-white text-xs hover:bg-gray-800"
                  >
                    View
                  </button>

                  {/* Status Update Dropdown */}
                  <select
                    className="border p-1 rounded text-sm"
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

      </div>

      {/* VIEW COMPLAINT MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl relative">

            <button
              className="absolute right-3 top-3 text-xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Complaint Details</h2>

            <div className="space-y-3 text-sm">
              <p><strong>Name:</strong> {selected.name}</p>
              <p><strong>Email:</strong> {selected.email}</p>
              <p><strong>Contact:</strong> {selected.contact}</p>
              <p><strong>Branch:</strong> {selected.branch}</p>
              <p><strong>Category:</strong> {selected.category}</p>

              <p>
                <strong>Complaint:</strong>
                <br />
                <span className="block mt-1 p-2 bg-gray-100 rounded">
                  {selected.complaint}
                </span>
              </p>

              <p><strong>Tracking ID:</strong> {selected.trackingId}</p>
            </div>

            <button
              className="mt-5 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
