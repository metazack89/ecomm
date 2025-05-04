import React from "react";
import { RingLoader } from "react-spinners";

const Pages = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#1a202c]">
      <div className="mb-6">
        <RingLoader color="#029fae" size={150} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-[#7e22ce] mt-4 mb-4">
        Pages Section (Under construction)
      </h1>
      <p className="text-base md:text-lg text-[#b4b4f5]">
        Come back soon to explore our other pages.
      </p>
    </div>
  );
};

export default Pages;
