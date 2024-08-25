import { Navbar2 } from "../Components/Navbar2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from "@auth0/auth0-react";
import { getPatientNotesByOwner, updatePatientNoteByNoteId } from "../firebase/firebase.config";
import { useEffect, useState, useCallback } from "react";
import Modal from 'react-modal';
import ReactQuill from "react-quill";
import { Link } from "react-router-dom";

interface PatientNote {
  id: string;
  name: string; 
  notes: string;
  age: string;
  gender: string;
}

export const Loggedin = () => {
  const [patientNotes, setPatientNotes] = useState<PatientNote[]>([]);
  const [selectedNote, setSelectedNote] = useState<PatientNote | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [editNote, setEditNote] = useState('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const uniqueId = uuidv4();
  const mail = user?.email;

  useEffect(() => {
    if (isAuthenticated && mail) {
      const fetchData = async () => {
        try {
          const data = await getPatientNotesByOwner(mail);
          setPatientNotes(data as PatientNote[]);
        } catch (error) {
          console.error("Error fetching patient notes:", error);
        }
      };
      fetchData();
    }
  }, [isAuthenticated, mail]);

  const openModal = (note: PatientNote) => {
    setSelectedNote(note);
    setEditNote(note.notes);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedNote(null);
    setModalIsOpen(false);
    setReadOnly(true);
  };

  const handleReadOnly = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setReadOnly(prevReadOnly => !prevReadOnly);
  }, []);

  const handleEdit = (content: string) => {
    setEditNote(content);
  };

  const handleUpdateNote = async (noteId: string) => {
    try {
      await updatePatientNoteByNoteId(noteId, { notes: editNote });
      setPatientNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === noteId ? { ...note, notes: editNote } : note
        )
      );
      setSelectedNote(prevNote => (prevNote ? { ...prevNote, notes: editNote } : null));
      setReadOnly(true);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Filter patient notes based on search query
  const filteredNotes = patientNotes.filter(note =>
    note.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.age.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar2 />
      <div className="text-right mt-16 mr-12">
        <Link to={`/page1/${uniqueId}`}>
          <button className="text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create a Session Now
          </button>
        </Link>
      </div>

      <div className="text-4xl pl-16 text-gray-700 font-bold">
        Patient Notes
      </div>

      <div className="mt-8 mx-12">
        {/* Search bar with icon */}
        <div className="relative mb-4">
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-md pl-10 w-full"
            placeholder="Search by ID, Name, Age, or Gender"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-3 left-3 text-gray-400"
          />
        </div>

        {/* Responsive boxes for patient notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map(note => (
              <div
                key={note.id}
                className="bg-white p-6 mr-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openModal(note)}
              >
                <h3 className="text-xl font-semibold mb-2">{note.name}</h3>
                <p className="text-gray-700">Age: {note.age} years</p>
                <p className="text-gray-700">Gender: {note.gender}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No patient notes found.</p>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Patient Notes"
        className="relative bg-white p-8 rounded shadow-lg mx-auto my-8 max-w-lg outline-none max-h-[80vh] overflow-hidden"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedNote && (
          <div className="overflow-y-auto max-h-[70vh] pr-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-2xl font-bold mb-4">{selectedNote.name}</h2>
              <p className="text-gray-700 mb-2">Age: {selectedNote.age} years</p>
              <p className="text-gray-700 mb-4">Gender: {selectedNote.gender}</p>
              <ReactQuill value={editNote} readOnly={readOnly} onChange={handleEdit} />
              <button
                type="button"
                onClick={closeModal}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleReadOnly}
                className="mt-4 ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
              >
                {readOnly ? "Edit" : "View"}
              </button>
              {!readOnly && (
                <button
                  type="button"
                  className="mt-4 ml-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
                  onClick={() => handleUpdateNote(selectedNote.id)}
                >
                  Save Changes
                </button>
              )}
            </form>    
          </div>
        )}
      </Modal>
    </>
  );
};
