import { useContext, useState } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      setMsg(err.response.data.error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="email" placeholder="Email"
          className="w-full border p-2" onChange={handleChange} />

        <input name="password" type="password" placeholder="Password"
          className="w-full border p-2" onChange={handleChange} />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>

      {msg && <p className="mt-3 text-red-600">{msg}</p>}
    </div>
  );
}
