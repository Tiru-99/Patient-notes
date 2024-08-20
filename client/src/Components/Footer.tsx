
import { FaLinkedin, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 sm:ml-52 sm:mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="sm:w-1/2 lg:w-auto">
            <h2 className="text-2xl font-bold text-gray-900">Patient Notes</h2>
            <p className="mt-4">
              Saving time for health practitioners: speedy patient note finalization, supported by A.I.
            </p>
            <div className="mt-4 flex items-center">
              <HiOutlineMail className="mr-2 text-lg text-gray-600" />
              <span>hello@patientnotes.app</span>
            </div>
            <div className="mt-4 flex space-x-4">
              <FaLinkedin className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaFacebookF className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-gray-900 cursor-pointer" />
              <FaYoutube className="text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>

          {/* Professions */}
          <div className="sm:w-1/2 lg:w-auto">
            <h3 className="font-bold mb-4">Professions</h3>
            <ul className="space-y-2">
              <li className="font-thin">Doctor</li>
              <li className="font-thin">Medical Professional</li>
              <li className="font-thin">Nurse</li>
              <li className="font-thin">Psychologist</li>
              <li className="font-thin">Psychiatrist</li>
              <li className="font-thin">Speech Pathologist</li>
              <li className="font-thin">Arts Therapist</li>
              <li className="font-thin">Veterinarian</li>
              <li className="font-thin">Dentist</li>
              <li className="font-thin">Podiatrist</li>
              <li className="font-thin">Hand Therapist</li>
              <li className="font-thin">Pediatrician</li>
              <li className="font-thin">Dental Technician</li>
              <li className="font-thin">Dermatologist</li>
              <li className="font-thin">Psychiatric Nurse Practitioner</li>
              <li className="font-thin">General Practitioner</li>
              <li className="font-thin">Physiotherapist</li>
              <li className="font-thin">Dietician</li>
              <li className="font-thin">OT</li>
              <li className="font-thin">Chiropractor</li>
              <li className="font-thin">Acupuncturist</li>
              <li className="font-thin">Osteopath</li>
              <li className="font-thin">Dermatologist</li>
              <li className="font-thin">Exercise Physiologist</li>
              <li className="font-thin">Massage Therapist</li>
              <li className="font-thin">Dialysis Technician</li>
              <li className="font-thin">Cardiac Surgeon</li>
              <li className="font-thin">Social Worker</li>
              <li className="font-thin">Eye Surgeon</li>
              <li className="font-thin">Mental Health Counselor</li>
              <li className="font-thin">Nurse Practitioner</li>
              <li className="font-thin">For practice managers</li>
              <li className="font-thin">For business owners</li>
            </ul>
          </div>

          {/* Support */}
          <div className="sm:w-1/2 lg:w-auto">
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="font-thin">Help Center</li>
              <li className="font-thin">Request a Demo</li>
              <li className="font-thin">FAQs</li>
              <li className="font-thin">Pricing</li>
              <li className="font-thin">Security</li>
              <li className="font-thin">Privacy & Compliance</li>
              <li className="font-thin">HIPAA</li>
              <li className="font-thin">GDPR</li>
              <li className="font-thin">Webinars + Events</li>
              <li className="font-thin">Meet Our Customers</li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:w-1/2 lg:w-auto">
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="font-thin">About</li>
              <li className="font-thin">Blog</li>
              <li className="font-thin">Careers</li>
              <li className="font-thin">Press</li>
            </ul>
            <h3 className="font-bold mt-8 mb-4">Apps</h3>
            <ul className="space-y-2">
              <li className="font-thin">iPhone</li>
              <li className="font-thin">iPad</li>
              <li className="font-thin">Mac</li>
            </ul>
            <h3 className="font-bold mt-8 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="font-thin">Privacy</li>
              <li className="font-thin">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
