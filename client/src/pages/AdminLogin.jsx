import { useState } from "react";
import api from "../api/axios";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async e => {
    e.preventDefault();
    try {
      await api.post("/auth/admin/login", form);
      window.location.href = "/admin-panel";
    } catch (err) {
      setMsg("Invalid Admin Credentials");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

      <form className="space-y-4" onSubmit={submit}>
        <input
          name="email"
          placeholder="Admin Email"
          className="w-full border p-2"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>

      {msg && <p className="mt-2 text-red-600">{msg}</p>}
    </div>
  );
}
