import { useState } from "react";
import api from "../api/axios";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signup", form);
      setMsg("Signup successful. Now login.");
    } catch (err) {
      setMsg(err.response.data.error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name"
          className="w-full border p-2" onChange={handleChange} />

        <input name="email" placeholder="Email (@icfai.edu only)"
          className="w-full border p-2" onChange={handleChange} />

        <input name="password" type="password" placeholder="Password"
          className="w-full border p-2" onChange={handleChange} />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>

      {msg && <p className="mt-3 text-red-600">{msg}</p>}
    </div>
  );
}
