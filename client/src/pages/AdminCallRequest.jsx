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
    fetchRequests();
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="w-full max-w-5xl">

        <h1 className="text-3xl font-bold mb-8 text-[#1E3A8A]">
          Call Requests Management
        </h1>

        {/* No Requests */}
        {requests.length === 0 && (
          <div className="bg-white border rounded-xl shadow p-6 text-center text-gray-600">
            No call requests received yet.
          </div>
        )}

        {/* Request List */}
        <div className="space-y-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {req.name}
                </h2>

                <span
                  className={`px-3 py-1 text-sm rounded-full font-semibold 
                    ${
                      req.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  `}
                >
                  {req.status.toUpperCase()}
                </span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Contact:</span> {req.contact}
                </p>
                <p>
                  <span className="font-medium">Preferred Time:</span>{" "}
                  {req.preferredTime}
                </p>
                <p className="sm:col-span-2">
                  <span className="font-medium">Reason:</span>{" "}
                  {req.reason || "—"}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                {req.status !== "completed" && (
                  <button
                    onClick={() => updateStatus(req._id, "completed")}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
                  >
                    Mark Completed
                  </button>
                )}

                {req.status !== "pending" && (
                  <button
                    onClick={() => updateStatus(req._id, "pending")}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
                  >
                    Mark Pending
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
