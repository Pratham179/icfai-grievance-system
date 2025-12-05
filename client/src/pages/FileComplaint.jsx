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

  const [showDeclaration, setShowDeclaration] = useState(true);
  const [agree, setAgree] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const submitComplaint = async () => {
    const res = await api.post("/complaints/file", {
      name,
      contact,
      email,
      branch,
      category,
      complaint,
    });

    setTrackId(res.data.trackingId);
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      {/* 🔥 Declaration Modal */}
      {showDeclaration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full relative">

            <button
              className="absolute right-3 top-3 text-gray-600 text-xl"
              onClick={() => setShowDeclaration(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Important</h2>

            <p className="font-semibold mb-2">Please read the following declaration carefully before proceeding.</p>

            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p><strong>Declaration:</strong> I understand that this portal is only for reporting grievances within ICFAI University.</p>

              <p>I have read and understood the purpose of the system and agree to submit only genuine and truthful information.</p>

              <p>I acknowledge that all information provided in this form is accurate, complete, and not intentionally concealed or misrepresented.</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              <label className="text-sm font-medium">
                I have read and understood the declaration.
              </label>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                className={`px-4 py-2 rounded text-white ${
                  agree ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!agree}
                onClick={() => setShowDeclaration(false)}
              >
                Proceed
              </button>

              <button
                className="px-4 py-2 rounded bg-gray-300"
                onClick={() => setShowDeclaration(false)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-center">
        Grievance Redressal Form
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input className="w-full border p-2 rounded" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />

        <input className="w-full border p-2 rounded" placeholder="Contact Number" onChange={(e) => setContact(e.target.value)} />

        <input className="w-full border p-2 rounded" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <select className="w-full border p-2 rounded" onChange={(e) => setBranch(e.target.value)} defaultValue="">
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

        <select className="w-full border p-2 rounded" onChange={(e) => setCategory(e.target.value)} defaultValue="">
          <option value="" disabled>Select Complaint Category</option>
          <option value="Academic Issue">Academic Issue</option>
          <option value="Faculty Behaviour">Faculty Behaviour</option>
          <option value="Harassment">Harassment</option>
          <option value="POSH">POSH Related</option>
          <option value="Hostel Issue">Hostel Issue</option>
          <option value="Infrastructure">Infrastructure Problem</option>
          <option value="Other">Other</option>
        </select>

        <textarea className="w-full border p-2 h-32 rounded" placeholder="Describe your issue" onChange={(e) => setComplaint(e.target.value)} />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Submit Complaint
        </button>
      </form>

      {trackId && (
        <p className="mt-4 font-bold text-center">
          Your Tracking ID: <span className="text-blue-600">{trackId}</span>
        </p>
      )}

      {/* Submit Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
            <h3 className="text-lg font-bold mb-4">Confirm Submission</h3>
            <p className="mb-4">Are you sure you want to submit this complaint?</p>

            <div className="flex justify-between">
              <button onClick={() => setShowPopup(false)} className="bg-gray-400 px-4 py-2 rounded text-white">No</button>

              <button onClick={submitComplaint} className="bg-green-600 px-4 py-2 rounded text-white">Yes, Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
