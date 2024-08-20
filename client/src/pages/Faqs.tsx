import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// Define the structure of a single FAQ item
interface FAQItemProps {
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItemProps[] = [
  {
    question: "How does PatientNotes work?",
    answer: "Individual signs up, patient consents, session is recorded, transcribed, AI Model used to generate a draft of your clinical notes, then context gained to create a Patient Summary and any needed letters to medical professionals."
  },
  {
    question: "I've been told I can't use ChatGPT with patient information, is it ok to use this?",
    answer: "ChatGPT isn't safe to use with patient information. Data entered into ChatGPT is retained for wider language learning models and often patient information is being entered into ChatGPT without consent. PatientNotes is different. Explicit consent from the patient is required for each session. Transcripts are heavily protected with layers of encryption and strict policies, stored in Sydney in Google's HIPAA compliant data center, and automatically deleted after 30 days."
  },
  {
    question: "Is a special microphone required?",
    answer: "Most practitioners start using their default laptop microphone, however for the best results we recommend having a dedicated USB microphone on your desk. Omnidirectional USB microphones work great. Read all about our microphone recommendations on our microphone support page."
  },
  {
    question: "Can I use PatientNotes on my mobile phone?",
    answer: "Yes. Navigate to patientnotes.app on your web browser, login, and away you go. Recording works great on mobile devices and on most devices will continue even when the screen locks."
  },
  {
    question: "Where are PatientNotes servers located?",
    answer: "PatientNotes runs on servers located in Sydney, Australia. We have plans to have dedicated servers in each country with data stored locally for each user where possible. Eg. If a user sets their country to United States, their data will reside in the United States."
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleReset = () => {
    setOpenIndex(null);
  };

  return (
    <>
    <Navbar/>

    <div className='bg-blue-50 sm:pb-20'>
    <h2 className="text-center text-4xl font-extrabold mb-4 sedan-font pt-24 ">Frequently Asked Questions</h2>
        <div className=" py-12 p-4 flex flex-col md:flex-row items-start sm:justify-center">
      {/* SVG Image */}
      <div className="flex-shrink-0 md:w-1/3 mb-4 md:mb-0 ml-10 sm:ml-40">
        <img src="/woman.svg" alt="Illustration" className="w-full h-auto" />
      </div>

      {/* FAQ Section */}
      <div className="md:w-2/3">
        
        <div className="max-w-xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

interface FAQItemPropsExtended extends FAQItemProps {
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemPropsExtended> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-300 py-4 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <button onClick={onToggle} className="focus:outline-none text-blue-600">
          {isOpen ? '-' : '+'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <p className="text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
    
  );
};

export default FAQSection;
