import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome Home</h1>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/login" 
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out text-center"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-3 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-md hover:bg-blue-100 transition duration-300 ease-in-out text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;