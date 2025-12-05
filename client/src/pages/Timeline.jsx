export default function Timeline() {
  const steps = [
    {
      title: "1. Submit Complaint",
      desc: "You file a complaint through the portal and receive a tracking ID instantly."
    },
    {
      title: "2. Initial Review (24–48 hours)",
      desc: "The Internal Committee reviews your submission and validates details."
    },
    {
      title: "3. Acknowledgement",
      desc: "You receive an official acknowledgment via your registered email."
    },
    {
      title: "4. Investigation Phase (3–10 days)",
      desc: "Committee may contact you for additional information and evaluate evidence."
    },
    {
      title: "5. Committee Decision (5 days)",
      desc: "A formal decision is prepared, reviewed, and approved internally."
    },
    {
      title: "6. Resolution (7–15 working days)",
      desc: "Appropriate actions are taken and the resolution is confidentially communicated."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mt-10">

        <h2 className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]">
          Complaint Resolution Timeline
        </h2>

        <p className="text-gray-600 text-center mb-8">
          A step-by-step overview of how your grievance is processed.
        </p>

        <div className="relative border-l-4 border-[#1E3A8A] pl-6 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Dot indicator */}
              <div className="w-4 h-4 bg-[#1E3A8A] rounded-full absolute -left-[1.1rem] top-1"></div>

              <h3 className="text-xl font-semibold text-[#1E3A8A]">{step.title}</h3>
              <p className="text-gray-700 mt-1">{step.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
