import { useState } from "react";
import api from "../api/axios";

export default function TrackComplaint() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState(null);

  const search = async () => {
    try {
      const res = await api.get(`/complaints/track/${trackingId}`);
      setStatus(res.data.status);
    } catch {
      setStatus("Invalid Tracking ID");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]">
          Track Your Complaint
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Enter the tracking ID provided at the time of complaint submission.
        </p>

        <input
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
          placeholder="Enter Tracking ID"
          onChange={(e) => setTrackingId(e.target.value)}
        />

        <button
          className="w-full bg-[#1E3A8A] text-white p-3 rounded-md mt-4 text-lg font-semibold hover:bg-[#1E40AF] transition"
          onClick={search}
        >
          Track Status
        </button>

        {status && (
          <p className="mt-6 text-center text-xl font-bold">
            Status:{" "}
            <span
              className={
                status === "open" ? "text-green-600" :
                status === "resolved" ? "text-blue-600" :
                "text-red-600"
              }
            >
              {status}
            </span>
          </p>
        )}
      </div>

    </div>
  );
}
