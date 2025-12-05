import { useState } from "react";
import api from "../api/axios";

export default function FileComplaint() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [category, setCategory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [trackId, setTrackId] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await api.post("/complaints/file", {
      name,
      contact,
      email,
      branch,
      category,
      complaint
    });

    setTrackId(res.data.trackingId);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Grievance Redressal Form
      </h2>

      <form className="space-y-4" onSubmit={submit}>

        {/* Name */}
        <input
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Contact Number */}
        <input
          placeholder="Contact Number"
          className="w-full border p-2 rounded"
          onChange={(e) => setContact(e.target.value)}
        />

        {/* Email */}
        <input
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ICFAI Branch Dropdown */}
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setBranch(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Select ICFAI Branch</option>
          <option value="Hyderabad">ICFAI University, Hyderabad</option>
          <option value="Dehradun">ICFAI University, Dehradun</option>
          <option value="Jaipur">ICFAI University, Jaipur</option>
          <option value="Tripura">ICFAI University, Tripura</option>
          <option value="Sikkim">ICFAI University, Sikkim</option>
          <option value="Jharkhand">ICFAI University, Jharkhand</option>
          <option value="Raipur">ICFAI University, Raipur</option>
          <option value="Mizoram">ICFAI University, Mizoram</option>
        </select>

        {/* Category Dropdown */}
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Select Complaint Category</option>
          <option value="Academic Issue">Academic Issue</option>
          <option value="Faculty Behaviour">Faculty Behaviour</option>
          <option value="Harassment">Harassment</option>
          <option value="POSH">POSH Related</option>
          <option value="Hostel Issue">Hostel Issue</option>
          <option value="Infrastructure">Infrastructure Problem</option>
          <option value="Other">Other</option>
        </select>

        {/* Complaint Description */}
        <textarea
          placeholder="Describe your issue"
          className="w-full border p-2 h-32 rounded"
          onChange={(e) => setComplaint(e.target.value)}
        />

        {/* Submit Button */}
        <button className="w-full bg-green-600 text-white p-2 rounded">
          Submit Complaint
        </button>
      </form>

      {/* Tracking ID Display */}
      {trackId && (
        <p className="mt-4 font-bold text-center">
          Your Tracking ID:{" "}
          <span className="text-blue-600">{trackId}</span>
        </p>
      )}
    </div>
  );
}
