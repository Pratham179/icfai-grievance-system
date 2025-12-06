import { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);

      setUser({
        email: form.email,
        role: res.data.role,
      });

      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border rounded-xl p-8 shadow-sm">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1E3A8A]">
          Login to Your Account
        </h2>

        {/* FORM */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter password"
              className="w-full border p-2 rounded mt-1"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Login as</label>
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
            Login
          </button>
        </form>

        {/* ERROR MESSAGE */}
        {msg && <p className="mt-4 text-center text-red-600 text-sm">{msg}</p>}

        {/* FOOTER */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
