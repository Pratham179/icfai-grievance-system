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
      navigate("/login"); // redirect on success
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border">

        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Create Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email (@icfai.edu)"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          {/* ROLE SELECT */}
          <select
            name="role"
            className="w-full border p-2 rounded bg-white"
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin (IC Committee Only)</option>
          </select>

          <button className="w-full bg-green-700 hover:bg-green-800 text-white p-2 rounded font-semibold">
            Signup
          </button>
        </form>

        {msg && <p className="mt-3 text-red-600 text-center">{msg}</p>}

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
