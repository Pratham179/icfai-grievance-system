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

      setMsg(
        "Your request has been submitted. A committee member will contact you soon."
      );

      // Clear form
      setName("");
      setContact("");
      setPreferredTime("");
      setReason("");
    } catch (err) {
      setMsg(
        err?.response?.data?.error ||
          "Unable to submit request right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Request a Confidential Call
      </h2>

      <p className="text-gray-700 text-sm mb-6 text-center">
        Use this option if you want to talk to a designated member before
        filing a formal complaint. This is for discussion and guidance only.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 rounded"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Contact Number"
          value={contact}
          onChange={e => setContact(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Preferred Time (e.g. 5–7 PM)"
          value={preferredTime}
          onChange={e => setPreferredTime(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-2 h-28 rounded"
          placeholder="Briefly describe what you want to discuss (optional but helpful)"
          value={reason}
          onChange={e => setReason(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {msg && (
        <p className="mt-4 text-center text-sm text-green-700 font-medium">
          {msg}
        </p>
      )}
    </div>
  );
}
