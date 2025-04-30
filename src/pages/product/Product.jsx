import React from "react";
import { RingLoader } from "react-spinners"; // Importa el spinner de react-spinners

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#1a202c]">
      <div className="w-full max-w-xl">
        <RingLoader color="#7e22ce" size={150} /> {/* Spinner de carga */}
        <h1 className="text-5xl font-bold text-[#7e22ce] mb-4">Product Page</h1>
        <p className="text-lg text-[#b4b4f5] mb-6">
          This page will display the details of our products.
        </p>
        <p className="text-md text-[#b4b4f5]">
          Stay tuned for more details as we update this section.
        </p>
      </div>
    </div>
  );
};

export default Product;
