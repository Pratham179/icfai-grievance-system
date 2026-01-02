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
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide hover:text-gray-200 transition"
        >
          IFHE Grievance Portal
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {/* When NOT logged in */}
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

          {/* When logged in */}
          {user && (
            <>
              {/* USER ONLY LINKS */}
              {user.role === "user" && (
                <>
                  <Link
                    className="hover:text-gray-300 transition"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                  <Link to="/important-docs" className="hover:text-blue-600">
                    Important Documents
                  </Link>

                  <Link
                    to="/request-call"
                    className="hover:text-gray-300 transition"
                  >
                    Request Call
                  </Link>

                  <Link className="hover:text-gray-300 transition" to="/file">
                    File Complaint
                  </Link>
                  <Link className="hover:text-gray-300 transition" to="/track">
                    Track
                  </Link>
                  <Link className="hover:text-gray-300 transition" to="/posh">
                    POSH Act
                  </Link>
                  <Link className="hover:text-gray-300 transition" to="/faq">
                    FAQ
                  </Link>
                  <Link
                    className="hover:text-gray-300 transition"
                    to="/timeline"
                  >
                    Timeline
                  </Link>
                </>
              )}

              {/* ADMIN ONLY LINKS */}
              {user.role === "admin" && (
                <>
                  <Link
                    className="hover:text-gray-300 transition"
                    to="/admin-panel"
                  >
                    View Complaints
                  </Link>
                  <Link
                    to="/admin/call-requests"
                    className="hover:text-gray-300 transition"
                  >
                    Call Requests
                  </Link>
                </>
              )}

              {/* COMMON LINKS FOR ALL LOGGED USERS */}

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
