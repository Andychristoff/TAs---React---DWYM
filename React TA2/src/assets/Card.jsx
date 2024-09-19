import React from "react"
import "./Card.css"

function Card({children}) {
    return (
      <div className="cards">
        {children}
      </div>
    );
  }

  export default Card