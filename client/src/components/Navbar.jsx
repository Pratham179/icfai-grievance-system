import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold">ICFAI Grievance Portal</h1>

      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/file">File Complaint</Link>
        <Link to="/track">Track</Link>
      </div>
    </nav>
  );
}
