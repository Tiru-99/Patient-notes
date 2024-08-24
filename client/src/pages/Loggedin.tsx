import { Navbar2 } from "../Components/Navbar2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
// import PatientForm from "../Components/PatientForm";



export const Loggedin = () => {

  const uniqueId = uuidv4(); // Generates a unique ID
  console.log(uniqueId);

  return (
    <>
        <Navbar2/>
        
        <div className="text-right mt-16 mr-12">
          <Link to={`/page1/${uniqueId}`}><button
                className="text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Create a Session Now
          </button></Link>
        </div>

 
      
    </>
  );
};
