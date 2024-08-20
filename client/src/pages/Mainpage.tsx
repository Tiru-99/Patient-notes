import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ChatWithTeam from "../Components/ChatWithTeam";
import '../index.css';
import CompatibilitySection from "../Components/CompatibilitySection";
import { FaPhone } from 'react-icons/fa';
import Testimonial from "../Components/Testimonial";



export const Mainpage = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-gray-700 to-blue-600">
                <Navbar />
                <div className="flex flex-col md:flex-row justify-center items-center py-12 px-10">
                    <div className="max-w-sm sm:max-w-xl mx-auto text-left p-4 mt-10">
                        {/* Header Text */}
                        <div className="md:text-6xl text-3xl  font-thin sedan-font text-white">
                            Let AI write your clinical notes so you can focus on your patients
                        </div>

                        {/* Paragraph Text */}
                        <div className="mt-10 sm:text-xl text-xl font-light sedan-font text-md text-white">
                            <p>
                                PatientNotes is a clinical note-taking tool that uses AI to write clinical notes, patient summaries, and medical letters.
                                It is designed to save you time and improve the quality of your notes.
                                With a focus on privacy and security, PatientNotes is a safe and secure way to start leveraging AI in your work today.
                            </p>
                        </div>

                        <div className="mt-10">
                        <button className="p-4 px-6 rounded-full bg-teal-500 text-navy-800 font-bold text-lg shadow-md transition-all duration-300 ease-in-out hover:bg-teal-600 hover:shadow-lg hover:text-white">
                            Get Started with Your 14-Day Trial
                        </button>

                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <img
                            src="/mainpageimg.png"
                            alt="Patient Notes"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-tr from-[#bce1e8] to-[#E3F8ED]">
                <div className="pt-24">
                    <div className="text-2xl text-center">
                        Getting Started
                    </div>
                    <div className="sedan-font text-4xl text-center mt-4">
                        See how PatientNotes works
                    </div>
                </div>

                <div className="flex justify-center items-center my-8 p-4">
                    <div className="relative w-full max-w-4xl" style={{ paddingTop: '45%' }} >
                        <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/sS8JudAtJhA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="pb-32">
                    <div className="text-center">
                        <div className="flex justify-center space-x-4 mt-4">
                        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-200 transform hover:bg-white hover:text-blue-600 border-2 border-blue-600">
                            Try it now - less than 2 minutes to get started
                        </button>
                        <button className="bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md flex items-center space-x-2 transition-all duration-200 hover:bg-gray-200">
                            <FaPhone className="text-red-500 text-xl transform rotate-90" />
                            <span>Speak to our team</span>
                        </button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-[#00656E]">
                <div >
                    <div className="text-xl font-semibold  tracking-tight text-center text-[#9FE2BF] pt-10">
                        Meet our customers
                    </div>

                    <div className="text-white sedan-font text-4xl text-center font-semibold max-w-md mx-auto pt-5">
                        Used in thousands of clinical sessions worldwide
                    </div>
                </div>

                <div className="flex flex-col sm:flex sm:flex-row  sm:justify-center sm:gap-12 pt-5 pb-24">
                    <div className="mt-12">
                        <div className='max-w-xs mx-auto'>
                            <img src="/doctor2.jpg" className="w-full h-auto" ></img>
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white sedan-font text-xl ">
                            PatientNotes Gets to the Core of Pelvic Health Documentation
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white text-xl">
                            <b>GenHealth</b> - Jessica
                        </div>

                    </div>

                    <div className="mt-12">
                        <div className='max-w-xs mx-auto'>
                            <img src="/doctor4.png" className="w-full h-auto" ></img>
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white sedan-font text-xl ">
                        Swift steps for pediatrist using PatientNotes on the road.
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white text-xl">
                            <b>Best Foot Forward</b> -  Ankush
                        </div>

                    </div>

                    <div className="mt-12">
                        <div className='max-w-xs mx-auto'>
                            <img src="/doctor5.png" className="w-full h-auto" ></img>
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white sedan-font text-xl ">
                            Tech Meets Touch for this Osteopath using AI with PatientNotes
                        </div>

                        <div className="max-w-xs pt-3 mx-auto text-white text-xl">
                            <b>Noosa Osteopathy</b> - Skye
                        </div>

                    </div>
                </div>
            </div>

            <Testimonial/>

            <div>
                <div>
                    <div className="text-center mx-auto pt-24 sedan-font text-4xl max-w-xl">
                        Ensure the security and compliance of your healthcare practice
                    </div>

                    <div className="text-center mx-auto pt-5 font-semibold text-xl max-w-2xl">
                         PatientNotes prioritizes the security and confidentiality of your patients’ data. Our platform meets the highest standards for AI applications in medical clinics and hospitals.

                    </div>

                    <div className="text-center mt-5">
                    <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
                         Read about Patient Notes dedication to security
                    </button>

                    </div>
                </div>

                <div className="mt-24 sm:flex justify-center flex-col-1 sm:gap-8">
                        <div className="flex flex-col items-center sm:mt-10 mt-16">
                            <div className="h-40 w-40 rounded-full">
                            <img src="/caduceus-symbol.png" className="max-w-full max-h-full object-contain" alt="Caduceus Symbol" />
                            </div>

                            <div className="relative text-center max-w-md font-bold text-3xl text-gray-600 mt-3">
                            <span className="inline-block">HIPAA Compliance</span>
                            <span className="absolute left-0 bottom-0 w-[200px] h-[2px] bg-red-300 translate-y-1"></span>
                            </div>

                            <div className="text-center max-w-md font-thin text-lg mt-3">
                            We meet all HIPAA requirements to ensure the confidentiality and security of Protected Health Information (PHI).
                            </div>
                        </div>

                        <div className="flex flex-col items-center sm:mt-10 mt-16">
                            <div className="h-40 w-40 rounded-full">
                            <img src="/gdpr.png" className="max-w-full max-h-full object-contain" alt="GDPR Symbol" />
                            </div>

                            <div className="relative text-center max-w-md font-bold text-3xl text-gray-600 mt-3">
                            <span className="inline-block">GDPR Compliance</span>
                            <span className="absolute left-0 bottom-0 w-[200px] h-[2px] bg-red-300 translate-y-1"></span>
                            </div>

                            <div className="text-center max-w-md font-thin text-lg mt-3">
                            We follow the data regulations established by the GDPR, UK GDPR, and UK Data Protection Act to ensure the privacy and security of personal data for individuals within the EU and UK.
                            </div>
                        </div>

                        <div className="flex flex-col items-center sm:mt-10 mt-16">
                            <div className="h-40 w-40 rounded-full">
                            <img src="/private.png" className="max-w-full max-h-full object-contain" alt="Privacy Symbol" />
                            </div>

                            <div className="relative text-center max-w-md font-bold text-3xl text-gray-600 mt-3">
                            <span className="inline-block">Australian Privacy Act 1998</span>
                            <span className="absolute left-0 bottom-0 w-[200px] h-[2px] bg-red-300 translate-y-1"></span>
                            </div>

                            <div className="text-center max-w-md font-thin text-lg mt-3">
                                PatientNotes is fully compliant with the Australian Privacy Act 1998 and the Australian Privacy Principles.
                            </div>
                        </div>
                </div>

            </div>

            <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-blue-100 mt-24 ">
                <div className="container mx-auto flex flex-col lg:flex-row items-center p-6 gap-20">
                    
                    {/* Left Side: Image */}
                    <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
                    <img 
                        src="/promo.png" 
                        alt="App Preview"
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                    </div>

                    {/* Right Side: Text and Buttons */}
                    <div className="lg:w-1/2 lg:ml-12">
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-2xl">★★★★★</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        PatientNotes iOS app for iPhone and iPad
                    </h1>
                    
                    <p className="text-gray-700 text-lg mb-6">
                        Version 1.0 (Updated April 4, 2024)
                    </p>

                    <p className="text-gray-600 text-lg mb-6">
                        Whether you are doing a consult in a gym, doing an in-home visit or just want to dictate some quick notes while they spring to mind, the PatientNotes app is a great companion that works with your account. Capture the session using an iPad or iPhone and access your notes from your computer, tablet or phone. You can then use your laptop or PC to save time on other clinical admin tasks, such as medical letters and reports.
                    </p>

                    <ul className="list-disc list-inside text-gray-600 mb-6">
                        <li>Quickly create a new session</li>
                        <li>Use the power of your iPhone microphone</li>
                        <li>Access PatientNotes from anywhere</li>
                    </ul>

                    <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                        Download now for free
                        </button>
                        <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-400 transition">
                        Leave a review
                        </button>
                    </div>
                    </div>
                </div>
            </section>

            <CompatibilitySection/> 


            <ChatWithTeam/>

            

            <Footer/>
        </>
        
    );
};
