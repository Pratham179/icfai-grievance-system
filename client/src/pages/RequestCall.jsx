import { useState } from "react";
import api from "../api/axios";

export default function RequestCall() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [reason, setReason] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      await api.post("/support/request-call", {
        name,
        contact,
        preferredTime,
        reason,
      });

      setMsg("Your request has been submitted. A committee member will contact you soon.");

      setName("");
      setContact("");
      setPreferredTime("");
      setReason("");
    } catch (err) {
      setMsg(err?.response?.data?.error || "Unable to submit request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white p-10 rounded-xl shadow-md border">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1E3A8A]">
          Request a Confidential Call
        </h2>

        <p className="text-gray-600 text-center text-sm mb-8 leading-relaxed">
          Speak privately with a designated committee member.  
          No formal complaint is created unless you choose to proceed.
        </p>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="text-sm text-gray-700 font-medium">Your Name</label>
            <input
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Contact Number</label>
            <input
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter contact number"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Preferred Time</label>
            <input
              className="w-full border p-2 rounded mt-1"
              placeholder="e.g. 5–7 PM"
              value={preferredTime}
              onChange={e => setPreferredTime(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Discussion Reason (Optional)</label>
            <textarea
              className="w-full border p-2 rounded mt-1 h-28"
              placeholder="Briefly describe what you want to discuss"
              value={reason}
              onChange={e => setReason(e.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white p-2 rounded font-semibold transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>
        </form>

        {/* MESSAGE */}
        {msg && (
          <p className="mt-6 text-center text-green-700 text-sm font-medium">
            {msg}
          </p>
        )}

      </div>
    </div>
  );
}
