import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.svg"; // Ruta relativa a tu archivo de imagen

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <img
        src={NotFoundImg}
        alt="404 Not Found"
        className="w-72 md:w-96 mb-6"
      />
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-inter">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
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
