export default function FAQ() {
  const faqs = [
    {
      q: "Who can file a grievance?",
      a: "Any student, faculty, or staff member with a valid ICFAI email ID."
    },
    {
      q: "Is my identity confidential?",
      a: "Yes. All complaints are confidential and accessible only to authorized committee members."
    },
    {
      q: "How long does it take to resolve a complaint?",
      a: "Most grievances are acknowledged within 48 hours and resolved within 7–15 working days."
    },
    {
      q: "Can I track my complaint?",
      a: "Yes. You will receive a unique tracking ID after submitting your grievance."
    },
    {
      q: "Can someone else see my complaint?",
      a: "No. Only designated committee members can view grievances."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg mt-10">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Find quick answers about the ICFAI Internal Grievance Redressal System.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <summary className="font-semibold text-lg cursor-pointer text-[#1E3A8A]">
                {item.q}
              </summary>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
