import React from "react";
import { RingLoader } from "react-spinners"; // Importa el spinner de react-spinners

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#1a202c]">
      <div className="w-full max-w-xl">
        <RingLoader color="#7e22ce" size={150} /> {/* Spinner de carga */}
        <h1 className="text-5xl font-bold text-[#7e22ce] mb-4">Shop Page</h1>
        <p className="text-lg text-[#b4b4f5] mb-6">
          We'll have more great products for you soon. See you back here!!
        </p>
        <button
          className="bg-[#7e22ce] text-white px-6 py-2 rounded-lg hover:bg-[#5b1a9d] transition duration-200"
          onClick={() => alert("Redirecting to products...")}
        >
          View products
        </button>
      </div>
    </div>
  );
};

export default Shop;
