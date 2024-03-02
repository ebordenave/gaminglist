import React from "react";
import Card from "./components/Card/Card.jsx";
import './App.css'
import cardData from "./components/cardData.js";
import Hero from "./components/Hero/Hero.jsx";

function App() {

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <div className="hero"><Hero /></div>
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} developer={card.developer} genre={card.genre}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
