import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await api.post("/auth/logout"); // backend clears cookie
    } catch (err) {
      console.log("Logout error (ignored)", err);
    }

    setUser(null);          // remove user from context
    navigate("/login");     // redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        ICFAI Grievance System
      </Link>

      <div className="space-x-4 flex items-center">
        {!user && (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/file" className="hover:underline">File Complaint</Link>
            <Link to="/track" className="hover:underline">Track Complaint</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/timeline" className="hover:underline">Timeline</Link>
            {/* <Link to="/" className="hover:underline">Home</Link> */}



            {/* 🔥 Logout Button */}
            <button
              onClick={logout}
              className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
