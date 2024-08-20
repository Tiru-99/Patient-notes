import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Team } from "../Components/Team"

export const AboutUs = () =>{
    return(
        <>
            <div>
                <Navbar/>
                <div className="bg-gradient-to-r from-gray-700 to-blue-600 text-white pt-16 pb-12 font-bold">
                    <div className="text-center mx-auto text-6xl sedan-font">
                        About Us
                    </div>
                    <div className="text-center mx-auto text-lg font-thin max-w-md pt-5 p-4">
                        Patient Notes is a clinical notes-taking tool that uses AI to write clinical 
                        notes , patient summaries , and referral letters. It is designed to save you
                        time and improve the quality of your notes. With a focus on privacy and security,
                        PatientNotes is the best way to start leveraging AI in your work today.
                    </div>
                </div>
            </div>
            <Team/>
            <hr className="border-t-2 mt-10"></hr>
            <Footer/>
        </>
    )
}