import React from "react"
import "./Card.css"

function Card({ titulo, descripcion, personaAsignada, fechaInicio, fechaFin }) {
    return (
      <div className="cards">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <p><strong>Asignado a:</strong> {personaAsignada}</p>
        <p><strong>Fecha de inicio:</strong> {fechaInicio}</p>
        <p><strong>Fecha de fin:</strong> {fechaFin}</p>
      </div>
    );
  }

  export default Card