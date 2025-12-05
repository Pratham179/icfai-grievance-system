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
    role: "user"
  });

  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);

      setUser({
        email: form.email,
        role: res.data.role
      });

      navigate("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border">

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
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

          <button className="w-full bg-blue-700 hover:bg-blue-800 text-white p-2 rounded font-semibold">
            Login
          </button>
        </form>

        {msg && <p className="mt-3 text-red-600 text-center">{msg}</p>}

        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
