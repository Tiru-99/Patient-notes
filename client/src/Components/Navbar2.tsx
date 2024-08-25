import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Navbar2 = () => {
  const navigate = useNavigate(); 
  const { user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("You need to be logged in to access this page");
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    console.log("Some problem occurred during logging the user in");
    return null;
  }

  return (
    <>
      <div className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          {/* Brand Name */}
          <img 
            src='/logo.svg' 
            alt="Logo" 
            className="w-44 h-11" 
          />

          {/* User Info and Logout Button */}
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              {user.email}
            </div>
            <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
