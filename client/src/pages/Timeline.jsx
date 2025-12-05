export default function Timeline() {
  const steps = [
    {
      title: "1. Submit Complaint",
      desc: "You file a complaint through the online portal. You immediately receive a tracking ID."
    },
    {
      title: "2. Initial Review (24–48 hours)",
      desc: "The Internal Committee reviews your complaint and validates the details."
    },
    {
      title: "3. Acknowledgement",
      desc: "You receive an acknowledgment via your registered email."
    },
    {
      title: "4. Investigation Phase (3–10 days)",
      desc: "Committee may contact you for additional information. Evidence is examined."
    },
    {
      title: "5. Committee Decision (5 days)",
      desc: "A formal decision is drafted, reviewed, and approved internally."
    },
    {
      title: "6. Resolution (7–15 working days)",
      desc: "Corrective actions are taken and communicated to you in a confidential manner."
    }
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Complaint Resolution Timeline</h2>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-700 mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
