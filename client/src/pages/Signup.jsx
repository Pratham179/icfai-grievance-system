import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      navigate("/login");
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border rounded-xl p-8 shadow-sm">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1E3A8A]">
          Create Your Account
        </h2>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name"
              className="w-full border p-2 rounded mt-1"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              placeholder="Email (@icfai.edu only)"
              className="w-full border p-2 rounded mt-1"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              className="w-full border p-2 rounded mt-1"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Register as</label>
            <select
              name="role"
              className="w-full border p-2 rounded mt-1 bg-white"
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin (IC Committee Only)</option>
            </select>
          </div>

          <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white p-2 rounded font-semibold transition">
            Signup
          </button>
        </form>

        {/* ERROR MESSAGE */}
        {msg && <p className="mt-4 text-center text-red-600 text-sm">{msg}</p>}

        {/* FOOTER */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
