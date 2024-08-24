import { useParams } from 'react-router-dom';
import { Navbar2 } from "../Components/Navbar2";
import PatientForm from '../Components/PatientForm';



export const Patient: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extracts the id from the URL
  if(!id){
    console.log("id params issue");
    return ;
  }
  return (
    <>
      <Navbar2 />
      <PatientForm uniqueId={id}/>
    </>
  );
};
