

const FAQ = () => {
  const questions = [
    {
      question: "Is PatientNotes HIPAA compliant?",
      answer: "Yes, PatientNotes is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA), ensuring the confidentiality, integrity, and security of protected health information (PHI)."
    },
    {
      question: "Is PatientNotes GDPR, UK GDPR, and DPA compliant?",
      answer: "PatientNotes adheres to the General Data Protection Regulation (GDPR), UK GDPR, and the Data Protection Act (DPA), providing robust data protection for individuals within the EU and UK."
    },
    {
      question: "Is PatientNotes compliant with the Australian Privacy Act 1998?",
      answer: "Yes. PatientNotes complies with the Australian Privacy Act 1998, upholding the Australian Privacy Principles to safeguard personal information."
    },
    {
      question: "Do you have a Business Associate Agreement (BAA)?",
      answer: "Yes. We provide a Business Associate Agreement (BAA) to our US-based customers on request to ensure mutual compliance with HIPAA regulations. A BAA can be requested by emailing compliance@patientnotes.app."
    },
    {
      question: "Do you have a Data Processing Agreement (DPA)?",
      answer: "PatientNotes enters into a Data Processing Agreement (DPA) with UK-based and EU-based customers on-request to outline the responsibilities and scope of data processing in compliance with GDPR and other data protection laws. A DPA can be requested by emailing compliance@patientnotes.app."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pt-24 pb-24 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8 sedan-font ">Common questions about privacy at PatientNotes</h2>
      <div className="space-y-8">
        {questions.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
            <p className="text-gray-600 mt-2 font-thin">{item.answer}</p>
            <hr className="mt-3 bg-gray-300 h-[2px]"></hr>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default FAQ;
