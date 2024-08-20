import { useState,useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/page1');
    }
  }, [isAuthenticated, navigate]);


  return (
    <nav className="bg-gradient-to-r from-gray-700 to-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left: Logo/Image */}
        <div className="flex items-center sedan-font text-3xl font-semibold">
          Patient Notes
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About Us', 'Privacy','Our Customers', 'FAQs'].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase().replace(" ", "")}`} 
              className="relative group text-white"
            >
              {item}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-300 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Right: Login Button */}
        <div className="hidden md:block">
          <button onClick={()=> loginWithRedirect()} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Log In
          </button>
        </div>

        {/* Hamburger Menu Button (Visible on Small Screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white absolute top-0 right-0 h-screen w-3/4 shadow-lg p-4 z-50`}
      >
        {/* Close Button */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-black">
          &times;
        </button>
        
        {['Home', 'About Us', 'Privacy','Our Customers', 'FAQs'].map((item) => (
          <a 
            key={item} 
            href={`/${item.toLowerCase().replace(" ", "")}`} 
            className="block px-4 py-2 text-black  hover:underline text-2xl !important"
          >
            {item}
          </a>
        ))}
        
        <button onClick={()=>loginWithRedirect()} className="block px-4 py-2 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded transition duration-300">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
