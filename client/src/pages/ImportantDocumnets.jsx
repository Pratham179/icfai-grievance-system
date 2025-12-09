import { FaFilePdf } from "react-icons/fa";

export default function ImportantDocuments() {
  const docs = [
    { title: "AICTE Grievance Redressal Guidelines", file: "AICTE GUIDELINES.pdf" },
    { title: "UGC Guidelines", file: "UGC Guidelines.pdf" },
    { title: "POSH Act 2013", file: "POSH ACT 2013.pdf" },
    { title: "POSH Rules", file: "POSH RULES.pdf" },
  ];

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-[#1E3A8A] mb-6">
        Important Guidelines & Documents
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <ul className="space-y-4">
          {docs.map((doc, idx) => (
            <li key={idx} className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-red-600 text-xl" />
                <span className="font-medium">{doc.title}</span>
              </div>

              <a
                href={`http://localhost:5000/guidelines/${doc.file}`}

                target="_blank"
                className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#1E40AF]"
              >
                View
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
