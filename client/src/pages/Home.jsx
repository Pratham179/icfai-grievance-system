export default function Home() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* HERO SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          ICFAI University Grievance Redressal Portal
        </h1>

        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          A secure and confidential system for reporting grievances related to
          sexual harassment, misconduct, discrimination, or any workplace
          concern. Your identity and information remain strictly protected.
        </p>
      </div>

      {/* CARDS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* CARD 1 - File Complaint */}
        <a
          href="/file"
          className="block p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">File a Complaint</h2>
          <p className="text-gray-600 text-sm">
            Submit a formal grievance securely. Only authorized committee
            members can view your details.
          </p>
        </a>

        {/* CARD 2 - Track Complaint */}
        <a
          href="/track"
          className="block p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Track Complaint Status</h2>
          <p className="text-gray-600 text-sm">
            Check real-time updates on the grievance you submitted.
          </p>
        </a>

        {/* CARD 3 - Know Your Rights */}
        <a
          href="/faq"
          className="block p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
        >
          <h2 className="text-xl font-semibold mb-2">Know Your Rights</h2>
          <p className="text-gray-600 text-sm">
            Learn about POSH policies, procedures, and protections available to
            you.
          </p>
        </a>

        {/* CARD 4 - Request a Confidential Call */}
        <a
          href="/request-call"
          className="block p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white"
        >
          <h2 className="text-xl font-semibold mb-2 text-red-600">
            Request a Confidential Call
          </h2>
          <p className="text-gray-600 text-sm">
            Speak privately with a designated committee member before filing
            anything formally. No records are created unless *you* choose to
            proceed.
          </p>
        </a>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-12 text-center text-gray-600 text-sm max-w-2xl mx-auto">
        <p>
          This portal follows the rules and procedures outlined in the
          <strong> Sexual Harassment of Women at Workplace Act, 2013</strong>
          and ICFAI University internal guidelines.
        </p>
        <p className="mt-2">
          Your privacy and confidentiality are our highest priority.
        </p>
      </div>
    </div>
  );
}
