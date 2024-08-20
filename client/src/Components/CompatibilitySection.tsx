const CompatibilitySection = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-600 py-12">
      <h2 className="text-center text-4xl font-extrabold text-white mb-8">
        Compatible with Your Favorite Platforms
      </h2>
      <div className="flex justify-center items-center space-x-8 flex-wrap">
        {/* Safari Logo */}
        <div className="flex flex-col items-center p-4">
          <img 
            src="/safari.png" 
            alt="Safari" 
            className="h-16 w-16 object-contain transition-transform transform hover:scale-110"
          />
        </div>

        {/* Chrome Logo */}
        <div className="flex flex-col items-center p-4">
          <img 
            src="/chrome.png" 
            alt="Chrome" 
            className="h-16 w-16 object-contain transition-transform transform hover:scale-110"
          />
        </div>

        {/* Firefox Logo */}
        <div className="flex flex-col items-center p-4">
          <img 
            src="/firefox.png" 
            alt="Firefox" 
            className="h-16 w-16 object-contain transition-transform transform hover:scale-110"
          />
        </div>

        {/* Microsoft Teams Logo */}
        <div className="flex flex-col items-center p-4">
          <img 
            src="/business.png" 
            alt="Microsoft Teams" 
            className="h-16 w-16 object-contain transition-transform transform hover:scale-110"
          />
        </div>

        {/* Zoom Logo */}
        <div className="flex flex-col items-center p-4">
          <img 
            src="/zoom.png" 
            alt="Zoom" 
            className="h-16 w-16 object-contain transition-transform transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default CompatibilitySection;

