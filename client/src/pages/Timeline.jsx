export default function Timeline() {
  const steps = [
    {
      title: "1. Submission of Complaint",
      desc: "Within 3 months of the last incident"
    },
    {
      title: "2. Notice to the Respondent",
      desc: "Within 7 days of receiving copy of the complaint"
    },
    {
      title: "3. Completion of Inquiry",
      desc: "Within 90 days"
    },
    {
      title: "4. Submission of Report by IC/LCC to employer/DO",
      desc: "Within 10 days of completion of the inquiry"
    },
    {
      title: "5. Implementation of Recommendations",
      desc: "Within 60 days"
    },
    {
      title: "6. Appeal",
      desc: "Within 90 days of the recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 mt-10">

        <h2 className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]">
          Timelines as per the Act
        </h2>

        <div className="relative border-l-4 border-[#1E3A8A] pl-6 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              <div className="w-4 h-4 bg-[#1E3A8A] rounded-full absolute -left-[1.1rem] top-1"></div>

              <h3 className="text-xl font-semibold text-[#1E3A8A]">
                {step.title}
              </h3>
              <p className="text-gray-700 mt-1">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
