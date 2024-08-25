import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dictaphone from './Dictaphone';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Modal from 'react-modal';
import { addPatientNoteToFirestore } from '../firebase/firebase.config.ts'; 
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';



interface PatientFormState {
  patientName: string;
  patientAge: string;
  gender: string;
  notes: string;
  isRecording: boolean;
}

interface PatientFormProps {
  uniqueId: string;
}






const PatientForm: React.FC<PatientFormProps> = ({ uniqueId }) => {
  const [formState, setFormState] = useState<PatientFormState>({
    patientName: '',
    patientAge: '',
    gender: '',
    notes: '',
    isRecording: false,
  });

  const{user } = useAuth0(); 
  const navigate = useNavigate(); 
  


  const handleSaveNoteToFirebase = async () => {

    if (!user) {
      console.log("User is not authenticated");
      return;
    }

    const patientData = {
      owner : user.email, 
      id: uniqueId,
      name: formState.patientName,
      age: formState.patientAge,
      gender: formState.gender,
      notes: generatedNotes,
    };

    try {
      await addPatientNoteToFirestore(patientData);
      console.log("Patient note saved to Firestore successfully");
    } catch (error) {
      console.error("Error saving patient note to Firestore", error);
    }
  };
  
  

  const addPatientNote = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Save to Firebase
    handleSaveNoteToFirebase();
    // Close the modal after saving
    alert("Patient Notes Saved Successfully!");
    
    setModalIsOpen(false);
    navigate('/page1');
  };

  const [loading, setLoading] = useState<boolean>(false);
  const [generatedNotes, setGeneratedNotes] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      patientName: e.target.value,
    }));

   
  };



  const handleQuill = (e :any) =>{
      setGeneratedNotes(e);    
      console.log(generatedNotes);
  }

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      patientAge: e.target.value,
    }));

   
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormState(prevState => ({
      ...prevState,
      gender: e.target.value,
    }));

  };

  const handleEditorChange = (value: string) => {
    setFormState(prevState => ({
      ...prevState,
      notes: value,
    }));
  };

  const handleRecordAudio = () => {
    setFormState(prevState => ({
      ...prevState,
      isRecording: !prevState.isRecording,
    }));
  };

  const handleTranscript = (transcript: string) => {
    setFormState(prevState => ({
      ...prevState,
      notes: transcript,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    try {
      const prompt = `Patient Name: ${formState.patientName}\nAge: ${formState.patientAge}\nGender: ${formState.gender}\nNotes: ${formState.notes}\n\nPlease create a comprehensive and structured patient note using the information above. Include the patient's name, age, and gender at the top. Ensure the note is detailed and formatted using HTML, suitable for a rich text editor. 

      Use the following guidelines for formatting:
      - **Headings**: Use <h1>, <h2>, etc., for headings, and wrap these headings in <b> tags for bold text.
      - **Bold Text**: Use <strong> or <b> tags to highlight important information such as blood pressure readings, patient data, and key findings.
      - **Bullet Points**: Use <ul> for unordered lists and <li> for list items to present information in bullet points.
      - **Paragraphs**: Use <p> tags for paragraphs to ensure proper text separation.Include one or two line breaks (using <br>) between paragraphs and sections where necessary to improve readability.

      Ensure that the note is well-organized and clearly readable & detail oriented. Avoid generic responses like "I don't have sufficient information" or "consult a doctor." This is for an internship project, so provide detailed content and make sure it looks professional and is formatted correctly.`;

      const result = await model.generateContent([prompt]);

      setGeneratedNotes(result.response.text());
      setModalIsOpen(true); // Open modal after notes are generated
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error generating notes:', error.response?.data || error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Patient Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          {/* Name input field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formState.patientName}
              onChange={handleNameChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter patient name"
              required
            />
          </div>

          {/* Age input field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={formState.patientAge}
              onChange={handleAgeChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter patient age"
              required
            />
          </div>

          {/* Gender input field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              value={formState.gender}
              onChange={handleGenderChange}
              className="block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Notes input section */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <div className="flex space-x-4 mb-4">
              <button
                type="button"
                onClick={handleRecordAudio}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                {formState.isRecording ? 'Recording' : 'Record Audio'}
              </button>

              <button
                type="button"
                onClick={() => setFormState(prevState => ({ ...prevState, isRecording: false }))}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Use Text Editor
              </button>
            </div>
            {formState.isRecording ? (
              <Dictaphone onTranscript={handleTranscript} />
            ) : (
              <ReactQuill
                value={formState.notes}
                onChange={handleEditorChange}
                className="h-60"
              />
            )}
          </div>

          {/* Submit button */}
          <div className="mt-4 mb-12 translate-y-4 max-w-md mx-auto">
            <button
              type="submit"
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V2a10 10 0 00-10 10h2zm0 0a8 8 0 018 8v2a10 10 0 00-10-10h2z"
                    />
                  </svg>
                  Generating...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Modal for displaying generated notes */}
     
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  className="fixed inset-0 flex items-center justify-center p-4"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50"
>
  <div className="relative bg-white max-w-4xl mx-auto p-4 rounded-lg h-auto max-h-[80vh] overflow-auto">
    <button
      onClick={() => setModalIsOpen(false)}
      className="absolute top-3 right-4 hover:text-slate-300 text-red-500 font-bold text-xl p-2"
    >
      X
    </button>
    <form>
    <ReactQuill className="h-full" value={generatedNotes} onChange={handleQuill} readOnly={false} >
      
    </ReactQuill>
    
    <div className='text-center'>
      <button className='bg-green-400 p-1 px-2 mt-2 mb-2  text-white rounded' onClick={addPatientNote} type='submit'> Save Patient Notes </button>
    </div>
    </form>
  </div>
</Modal>

    </>
  );
};

export default PatientForm;
