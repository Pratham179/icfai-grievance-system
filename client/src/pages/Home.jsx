export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* HERO SECTION */}
      <div className="text-center mb-14 bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-xl shadow-sm">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          ICFAI University Grievance Redressal Portal
        </h1>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          A confidential and secure platform for raising concerns related to 
          harassment, discrimination, misconduct, or any workplace issues.  
          Your identity and information remain strictly protected.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* File Complaint */}
        <a
          href="/file"
          className="block p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="text-3xl mb-3">📝</div>
          <h2 className="text-xl font-semibold mb-2">File a Complaint</h2>
          <p className="text-gray-600 text-sm">
            Submit a formal grievance securely. Only authorized committee 
            members have access.
          </p>
        </a>

        {/* Track Complaint */}
        <a
          href="/track"
          className="block p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="text-3xl mb-3">🔍</div>
          <h2 className="text-xl font-semibold mb-2">Track Complaint Status</h2>
          <p className="text-gray-600 text-sm">
            Check the real-time status of your grievance anytime.
          </p>
        </a>

        {/* Know Your Rights */}
        <a
          href="/faq"
          className="block p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="text-3xl mb-3">📘</div>
          <h2 className="text-xl font-semibold mb-2">Know Your Rights</h2>
          <p className="text-gray-600 text-sm">
            Understand POSH rules, IC guidelines, and protection you are entitled to.
          </p>
        </a>

        {/* Request Call */}
        <a
          href="/request-call"
          className="block p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition transform hover:-translate-y-1"
        >
          <div className="text-3xl mb-3">📞</div>
          <h2 className="text-xl font-semibold mb-2 text-red-600">
            Request a Confidential Call
          </h2>
          <p className="text-gray-600 text-sm">
            Speak privately with a committee member without filing anything formally.
          </p>
        </a>
      </div>

      {/* FOOTER */}
      <div className="mt-14 text-center text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
        <p>
          This portal complies with the 
          <strong> Sexual Harassment of Women at Workplace Act, 2013</strong> 
          and ICFAI University internal policies.
        </p>
        <p className="mt-2">
          Your confidentiality and safety are our top priority.
        </p>
      </div>
    </div>
  );
}
