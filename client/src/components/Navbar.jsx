import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.log("Logout error", err);
    }
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-[#1E3A8A] text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO / TITLE */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:text-gray-200 transition"
        >
          ICFAI Grievance Portal
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">

          {!user && (
            <>
              <Link className="hover:text-gray-300 transition" to="/login">
                Login
              </Link>
              <Link className="hover:text-gray-300 transition" to="/signup">
                Signup
              </Link>
            </>
          )}

          {user && (
            <>
              <Link className="hover:text-gray-300 transition" to="/dashboard">
                Dashboard
              </Link>

              <Link className="hover:text-gray-300 transition" to="/file">
                File Complaint
              </Link>

              <Link className="hover:text-gray-300 transition" to="/track">
                Track
              </Link>

              <Link className="hover:text-gray-300 transition" to="/faq">
                FAQ
              </Link>

              <Link className="hover:text-gray-300 transition" to="/timeline">
                Timeline
              </Link>

              {/* LOGOUT BUTTON */}
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-1.5 rounded-md hover:bg-red-600 transition text-white font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
