import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const Loggedin = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth0();

  React.useEffect(() => {
    if (!isAuthenticated) {
      alert("You need to be logged in to access this page");
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    console.log("There is a problem with your ID and details");
    return null; 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">You Are Logged In Successfully!</h1>
        <div className="mb-4">
          <p className="text-lg text-gray-700">Your Email is:</p>
          <p className="text-xl font-bold text-gray-900">{user.email}</p>
        </div>
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
