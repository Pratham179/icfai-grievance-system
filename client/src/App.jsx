import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FileComplaint from "./pages/FileComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/file"
          element={
            <ProtectedRoute>
              <FileComplaint />
            </ProtectedRoute>
          }
        />

        <Route path="/track" element={<TrackComplaint />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}
