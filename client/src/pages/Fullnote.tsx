import { useParams } from "react-router-dom"
export const Fullnote = () =>{

    const { id } = useParams<{ id: string }>(); // Extracts the id from the URL
    
    if(!id){
        console.log("id params issue");
        return ;
    }
    return(
        <>
            
        </>
    )
}