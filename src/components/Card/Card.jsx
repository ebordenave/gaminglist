import React from "react";
import "./Card.css"
import {Button} from "../Button/Button.jsx";


function Card({image,title,genre}) {

  return (
    <>
      <div className="card-parent">
        <div className="card-image">
          <img src={image} alt={title}/>
        </div>
        <div className="card-data">
          <h2>{title}</h2>
          <p>{genre}</p>
        </div>
        <div className="buttonContainer">
          <Button />
        </div>
      </div>
    </>
  )
}

export default Card