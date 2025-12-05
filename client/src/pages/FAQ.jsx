export default function FAQ() {
  const faqs = [
    {
      q: "Who can file a grievance?",
      a: "Any student, faculty, or staff member with a valid ICFAI email ID."
    },
    {
      q: "Is my identity confidential?",
      a: "Yes. All complaints are encrypted and only authorized committee members can access them."
    },
    {
      q: "How long does it take to resolve a complaint?",
      a: "Most grievances are acknowledged within 48 hours and resolved within 7–15 working days depending on severity."
    },
    {
      q: "Can I track my complaint?",
      a: "Yes. You will receive a unique tracking ID after submitting your grievance."
    },
    {
      q: "Can someone else see my complaint?",
      a: "No. Only the Internal Committee (IC) is allowed to view complaint details."
    }
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border rounded p-4">
            <h3 className="font-semibold">{item.q}</h3>
            <p className="text-gray-700 mt-1">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
