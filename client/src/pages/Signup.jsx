import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      navigate("/login"); // redirect after success
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* CARD */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Register using your official ICFAI email address.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              name="name"
              placeholder="Your name"
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              name="email"
              placeholder="name@icfai.edu"
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-[#1E3A8A] outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="w-full bg-[#1E3A8A] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1E40AF] transition"
          >
            Signup
          </button>
        </form>

        {msg && (
          <p className="mt-4 text-center text-red-600 font-medium">{msg}</p>
        )}

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
