import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.svg"; // Asegúrate que exista en assets/

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-[#1a202c]">
      <img
        src={NotFoundImg}
        alt="404 Not Found"
        className="w-60 md:w-96 mb-6"
      />
      <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        Page Not Found
      </h2>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#029fae] text-white px-6 py-2 rounded-lg hover:bg-sky-500 transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
