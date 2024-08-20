import Navbar from "../Components/Navbar";
import { Customers } from "../Components/Customers";
export const Ourcustomer = ()=>{
    return(
        <>
            <Navbar/>

            <div>
                <div className="text-center mx-auto text-5xl sedan-text bg-[#EDF2F8] pt-24 ">
                    See What Our Customers Say
                </div>
            </div>

            <Customers/>

        </>
    )
}