// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "patientnotedb.firebaseapp.com",
  projectId: "patientnotedb",
  storageBucket: "patientnotedb.appspot.com",
  messagingSenderId: import.meta.env.FIREBASE_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID
};

type PatientNoteUpdate = {
    notes?: string;
    name?: string;
    age?: string;
    gender?: string;
    // Add other fields that might be updated
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a new patient note
export const addPatientNoteToFirestore = async (patientData : any) => {
  try {
    const docRef = await addDoc(collection(db, "patients"), patientData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Function to get patient notes for a specific user
export const getPatientNotesByOwner = async (ownerEmail: string) => {
    
  try {
    const q = query(collection(db, "patients"), where("owner", "==", ownerEmail));
    const querySnapshot = await getDocs(q);
    const patientNotes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return patientNotes;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};




// Function to update an existing patient note
export const updatePatientNoteByNoteId = async (noteId: string, updatedData: PatientNoteUpdate) => {
    try {
      console.log("Updating note in Firestore by id field. Note ID:", noteId);
      console.log("Updated data:", updatedData);
  
      // Step 1: Query to find the document with the specific id field
      const notesQuery = query(collection(db, "patients"), where("id", "==", noteId));
  
      // Step 2: Execute the query to get matching documents
      const querySnapshot = await getDocs(notesQuery);
  
      // Step 3: Check if a matching document was found
      if (querySnapshot.empty) {
        console.error(`No document found with id: ${noteId}`);
        throw new Error(`No document found with id: ${noteId}`);
      }
  
      // Step 4: Update the document found
      querySnapshot.forEach(async (docSnapshot) => {
        await updateDoc(docSnapshot.ref, updatedData);
        console.log(`Document with id ${noteId} updated successfully.`);
      });
  
    } catch (e) {
      console.error("Error updating document in Firestore by id:", e);
      throw e; // Re-throw the error so it can be caught in the component
    }
  };
export default db;
