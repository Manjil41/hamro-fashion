import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = ({ onReturnToHomepage }) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 flex-grow mb-6">
        <img
          src="./page not found Illustration.png"
          alt="Page not found illustration"
          className="max-w-xs h-2/4"
        />
      </div>

      <div className="max-w-md text-center mt-6 mb-6">
        <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed or temporarily unavailable.
        </p>
        <button
          className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          onClick={onReturnToHomepage}
        >
        <Link to="/">Return to Homepage</Link>  
        </button>
      </div>
      
    </div>
  );
};

export default PageNotFound;