import React from "react";
import { RingLoader } from "react-spinners"; // Importa el spinner de react-spinners
import "./pages.css"; // Asegúrate de importar el archivo CSS para estilizar

const Pages = () => {
  return (
    <div className="pages-container">
      <div className="spinner-container">
        <RingLoader color="#029fae" size={150} /> {/* Spinner de carga */}
      </div>
      <h1 className="title">Pages Section (Under construction)</h1>
      <p>Come back soon to explore our other pages.</p>
    </div>
  );
};

export default Pages;
