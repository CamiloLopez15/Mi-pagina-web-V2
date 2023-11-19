import React from "react";

function Proyecto({ href, img, titulo, descripcion }) {
  return (
    <div className="portafolioContenedor__proyectos__proyecto">
      <img
        className="portafolioContenedor__proyectos__proyecto-img"
        src={img}
      />
      <div className="portafolioContenedor__proyectos__proyecto__texto">
        <h3>{titulo}</h3>
        <p> {descripcion} </p>
        <a href={href} target="_BLANK" rel="noopener noreferrer">
          Ver más
        </a>
      </div>
    </div>
  );
}

export default Proyecto;
