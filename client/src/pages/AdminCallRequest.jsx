import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminCallRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    const res = await api.get("/admin/call-requests");
    setRequests(res.data);
  }

  async function updateStatus(id, status) {
    await api.put(`/admin/call-requests/${id}`, { status });
    fetchRequests(); // refresh list
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Call Requests</h1>

      {requests.length === 0 && (
        <p className="text-gray-600">No call requests yet.</p>
      )}

      <div className="space-y-4">
        {requests.map(req => (
          <div key={req._id} className="border p-4 rounded shadow bg-white">
            <p><b>Name:</b> {req.name}</p>
            <p><b>Contact:</b> {req.contact}</p>
            <p><b>Preferred Time:</b> {req.preferredTime}</p>
            <p><b>Reason:</b> {req.reason || "—"}</p>
            <p>
              <b>Status:</b>{" "}
              <span className={req.status === "completed" ? "text-green-600" : "text-yellow-600"}>
                {req.status}
              </span>
            </p>

            <div className="mt-3 flex gap-2">
              {req.status !== "completed" && (
                <button
                  onClick={() => updateStatus(req._id, "completed")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Mark Completed
                </button>
              )}

              {req.status !== "pending" && (
                <button
                  onClick={() => updateStatus(req._id, "pending")}
                  className="bg-yellow-600 text-white px-3 py-1 rounded"
                >
                  Mark Pending
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
