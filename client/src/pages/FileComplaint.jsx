import { useState } from "react";
import api from "../api/axios";

export default function FileComplaint() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [category, setCategory] = useState("");
  const [complaint, setComplaint] = useState("");
  const [trackId, setTrackId] = useState("");
  const [files, setFiles] = useState([]); // <-- NEW

  const [showDeclaration, setShowDeclaration] = useState(true);
  const [agree, setAgree] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  // -------------------------
  // SUBMIT FINAL COMPLAINT
  // -------------------------
 const submitComplaint = async () => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("contact", contact);
  formData.append("email", email);
  formData.append("branch", branch);
  formData.append("incidentDate", incidentDate);
  formData.append("category", category);
  formData.append("complaint", complaint);

  // IMPORTANT: Attach files
  for (let i = 0; i < files.length; i++) {
    formData.append("attachments", files[i]);
  }

  const res = await api.post("/complaints/file", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  setTrackId(res.data.trackingId);
  setShowPopup(false);
};



  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">

      {/* DECLARATION POPUP */}
      {showDeclaration && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full relative">

            <button
              className="absolute right-4 top-4 text-gray-600 text-xl hover:text-black"
              onClick={() => setShowDeclaration(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-[#1E3A8A]">
              Important Declaration
            </h2>

            <p className="font-semibold mb-2">
              Please read the declaration carefully before proceeding.
            </p>

            <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
              <p><strong>Declaration:</strong> This portal is to report genuine grievances under ICFAI University.</p>
              <p>I understand that I must submit only correct, complete and truthful information.</p>
              <p>I acknowledge that no details have been concealed, misrepresented, or falsified.</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="w-4 h-4"
              />
              <label className="text-sm font-medium">I agree to the declaration</label>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                onClick={() => setShowDeclaration(false)}
              >
                Close
              </button>

              <button
                disabled={!agree}
                className={`px-4 py-2 rounded text-white ${
                  agree ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => setShowDeclaration(false)}
              >
                Proceed
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MAIN FORM */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1E3A8A]">
          Grievance Redressal Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            placeholder="Contact Number"
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <input
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* INCIDENT DATE */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Date of Incident
            </label>
            <input
              type="date"
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A]"
              value={incidentDate}
              onChange={(e) => setIncidentDate(e.target.value)}
              required
            />
          </div>

          <select
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select ICFAI Branch</option>
            <option value="Hyderabad">ICFAI University, Hyderabad</option>
            <option value="Dehradun">ICFAI University, Dehradun</option>
            <option value="Jaipur">ICFAI University, Jaipur</option>
            <option value="Tripura">ICFAI University, Tripura</option>
            <option value="Sikkim">ICFAI University, Sikkim</option>
            <option value="Jharkhand">ICFAI University, Jharkhand</option>
            <option value="Raipur">ICFAI University, Raipur</option>
            <option value="Mizoram">ICFAI University, Mizoram</option>
          </select>

          <select
            className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Complaint Category</option>
            <option value="Academic Issue">Academic Issue</option>
            <option value="Faculty Behaviour">Faculty Behaviour</option>
            <option value="Harassment">Harassment</option>
            <option value="POSH">POSH Related</option>
            <option value="Hostel Issue">Hostel Issue</option>
            <option value="Infrastructure">Infrastructure Problem</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            className="w-full border p-3 h-32 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
            placeholder="Describe your issue"
            onChange={(e) => setComplaint(e.target.value)}
            required
          />

          {/* FILE UPLOAD */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Upload Supporting Documents (PDF/JPG/PNG)
            </label>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFiles(e.target.files)}
              className="w-full border p-3 rounded-md"
            />
          </div>

          <button className="w-full bg-[#1E3A8A] text-white p-3 rounded-md text-lg font-semibold hover:bg-[#1E40AF] transition">
            Submit Complaint
          </button>
        </form>

        {trackId && (
          <p className="mt-6 text-center text-lg font-bold">
            Your Tracking ID: <span className="text-blue-600">{trackId}</span>
          </p>
        )}
      </div>

      {/* SUBMISSION CONFIRM POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
            <h3 className="text-xl font-bold mb-3">Confirm Submission</h3>
            <p className="mb-4 text-gray-700">
              Are you sure you want to submit this complaint?
            </p>

            <div className="flex justify-between">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 px-4 py-2 rounded text-white"
              >
                No
              </button>

              <button
                onClick={submitComplaint}
                className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700"
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
