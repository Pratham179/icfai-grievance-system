import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import FileComplaint from "./pages/FileComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import FAQ from "./pages/FAQ";
import Timeline from "./pages/Timeline";
import Home from "./pages/Home";
import RequestCall from "./pages/RequestCall";
import POSH from "./pages/POSH";






import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/request-call" element={<RequestCall />} />
        <Route path="/posh" element={<POSH />} />



        
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
