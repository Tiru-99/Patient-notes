import Navbar from "../Components/Navbar"
import FAQ from "../Components/PrivacyFAQ"
import Footer from "../Components/Footer"


export const Privacy = () =>{
    return(
        <>
        <div>
            <Navbar/>
            
            <div className="bg-gradient-to-r from-gray-700 to-blue-600 pb-24">
                <div className="text-center text-6xl sedan-font font-bold text-white pt-20 ">
                    Privacy & Compliance 
                </div>
                <div className="text-center text-md sedan-font text-white pt-5 max-w-lg mx-auto p-4">
                    PatientNotes meets the regulations set out by HIPAA, GDPR, UK GDPR, UK Data Protection Act (DPA) 
                    and the Australian Privacy Act 1998.
                </div>
            </div>


            <div className="text-[#144D4D] sedan-font font-normal text-4xl text-center mx-auto mt-24">
                Protecting patient information is our #1 priority
            </div>

            <div className="mt-12 sm:flex justify-center flex-col-1 sm:gap-8">
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

                <div className="mt-24 bg-gradient-to-r from-green-100 to-blue-100">
                    <FAQ/>
                </div>

                <div className="mt-32">
                    <Footer/>
                </div>

                

        </div> 
        </>
    )
}