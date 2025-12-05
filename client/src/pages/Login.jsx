import { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post("/auth/login", form);
      setUser({ email: form.email });
      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Login to continue to the ICFAI Grievance Portal
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={handleChange}
              required
            />
          </div>

          <button className="w-full bg-[#1E3A8A] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#1E40AF] transition">
  Login
</button>


        </form>

        {msg && (
          <p className="mt-4 text-center text-red-600 font-medium">
            {msg}
          </p>
        )}

        {/* Signup link */}
        <p className="text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
