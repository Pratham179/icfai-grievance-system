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
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Track Complaint</h2>

      <input
        className="w-full border p-2 mt-4"
        placeholder="Enter Tracking ID"
        onChange={e => setTrackingId(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 text-white p-2 rounded mt-4"
        onClick={search}
      >
        Track
      </button>

      {status && <p className="mt-4 font-bold">Status: {status}</p>}
    </div>
  );
}
