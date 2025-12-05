import { useState } from "react";
import api from "../api/axios";

export default function FileComplaint() {
  const [category, setCategory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [trackId, setTrackId] = useState("");

  const submit = async e => {
    e.preventDefault();
    const res = await api.post("/complaints/file", { category, complaint });
    setTrackId(res.data.trackingId);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">File a Complaint</h2>

      <form className="space-y-4" onSubmit={submit}>
        <input
          placeholder="Category"
          className="w-full border p-2"
          onChange={e => setCategory(e.target.value)}
        />

        <textarea
          placeholder="Describe your issue"
          className="w-full border p-2 h-32"
          onChange={e => setComplaint(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {trackId && (
        <p className="mt-4 font-bold">
          Your Tracking ID: <span className="text-blue-600">{trackId}</span>
        </p>
      )}
    </div>
  );
}
