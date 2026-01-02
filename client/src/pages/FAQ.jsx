export default function FAQ() {
  const faqs = [
    {
      q: "What is sexual harassment?",
      a: "Sexual harassment includes one or more unwelcome acts or behavior, whether directly or by implication, such as physical contact or advances, a demand or request for sexual favours, making sexually coloured remarks, showing pornography, or any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature."
    },

    {
      q: "Who can file a grievance?",
      a: "Any student, faculty, or staff member with a valid IFHE email ID.",
    },
    {
      q: "Is my identity confidential?",
      a: "Yes. All complaints are confidential and accessible only to authorized committee members.",
    },
    {
      q: "How long does it take to resolve a complaint?",
      a: "Most grievances are acknowledged within 48 hours and resolved within 7–15 working days.",
    },
    {
      q: "Can I track my complaint?",
      a: "Yes. You will receive a unique tracking ID after submitting your grievance.",
    },
    {
      q: "Can someone else see my complaint?",
      a: "No. Only designated committee members can view grievances.",
    },
    {
      q: "What is Verbal harassment?",
      a: "Any inappropriate spoken words, comments, jokes, or remarks that make someone uncomfortable. This includes offensive language, sexually coloured jokes, comments and stories, and requests for sexual favours."
    },
    {
      q: "What is Non Verbal harassment?",
      a: "Unwelcome gestures like staring, leering, or similar non-verbal actions, body language, or expressions that are offensive or inappropriate."
    },
    {
      q: "What is Physical harassment?",
      a: "Any unwanted physical contact or actions that violate personal boundaries like hugs, kisses, etc.",
    },
    {
      q: "What is Cyber harassment?",
      a: "Harassment through emails, messages, social media, or any digital platform.",
    },
    {
      q: "What is Psychological harassment?",
      a: "Behavior that causes mental stress, fear, intimidation, or emotional harm.",
    },
    {
      q: "What is Visual harassment?",
      a: "Displaying offensive, obscene, sexually explicit images, videos, posters, or visual materials.",
    },
    {
      q: "What is a Hostile Work Environment?",
      a: "A situation where repeated inappropriate behavior creates an unsafe or uncomfortable environment which creates an unsafe, hostile, intimidating or an offensive work environment.",
    },
    {
      q: "What is Quid-Pro-Quo harassment?",
      a: "Quid-Pro-Quo means This-for-That.Implied or explicit promise of preferential /detrimental treatment.Implied or explicit threat about the victim's present or future employment status",
    },
    {
      q: "What does Other mean in grievance type?",
      a: "Any form of harassment or misconduct not covered under the listed categories.",
    },

    {
      q: "What is workplace?",
      a: "Workplace includes the location of the HEI, library, laboratories, lecture halls, dining halls or canteen, stadium, hostels, bank counters, parking areas, and also includes field visits, internships, excursions, cultural or sports meets, study tours, transport, online platforms, and any place related to academic or official activities of the institution."
    }
    ,
    {
      q: "Who is a student?",
      a: "A student is a person duly admitted and pursuing a programme of study either through regular mode or distance mode. It also includes a person who is in the process of taking admission in the HEI campus, although not yet admitted. A student who is a participant in any activity in an HEI other than the HEI where such student is enrolled shall also be treated as a student."
    },

    {
      q: "Who is an aggrieved person?",
      a: "An aggrieved person is anyone who alleges to have been subjected to sexual harassment at the workplace, regardless of age, gender, or employment status.",
    },
    {
      q: "Who is Conciliation?",
      a: "Conciliation is a process where the Internal Committee may, at the request of the aggrieved person, take steps to settle the matter between the aggrieved person and the respondent through conciliation. However, no monetary settlement shall be made as a basis of conciliation.",
    },
    {
      q: "Who is an consequence of false complaint?",
      a: "If the Internal Committee arrives at a conclusion that the allegation against the respondent is false and malicious, it may recommend to the employer or the management to take action against the complainant in accordance with the provisions of the service rules applicable to him/her. In case of students, they may be expelled or rusticated from the institution.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#1E3A8A]">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Find quick answers about the IFHE Internal Grievance Redressal System.
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
