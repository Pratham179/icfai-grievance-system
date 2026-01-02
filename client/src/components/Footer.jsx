export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0f172a] text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Internal Committee */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Internal Complaints Committee (ICC)
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Prof. XYZ – Presiding Officer</li>
            <li>• Dr. ABC – Faculty Representative</li>
            <li>• Ms. PQR – External Member</li>
            <li>• Mr. LMN – Staff Representative</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact & Support
          </h3>

          <p className="text-sm flex items-center gap-2">
            📧 <span className="text-blue-300">poshcommittee@IFHE.edu</span>
          </p>

          <p className="text-sm mt-1 flex items-center gap-2">📞 +91 98765 43210</p>

          <p className="text-sm mt-1 flex items-center gap-2">
            🏫 IFHE University, India
          </p>

          {/* Highlight Box */}
          <div className="mt-4 p-3 bg-blue-900/40 border border-blue-700 rounded-lg text-xs">
            For emergency concerns, please contact the ICC immediately through the email or phone listed above.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/posh" className="hover:text-blue-400 transition">POSH Act Guidelines</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400 transition">FAQs</a>
            </li>
            <li>
              <a href="/important-docs" className="hover:text-blue-400 transition">Important Documnets</a>
            </li>
            <li>
              <a href="/request-call" className="hover:text-blue-400 transition">Request a Call</a>
            </li>
            <li>
              <a href="/file" className="hover:text-blue-400 transition">File a Complaint</a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} IFHE University — Internal Grievance Redressal System  
        <br />
        Designed for confidential and secure reporting.
      </div>
    </footer>
  );
}
