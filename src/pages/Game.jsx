import React, { useState } from "react";
import "./Game.css";
import Map from "./Map";
import Timer from "./Timer";
import View from "./View";

function Game() {
  const [guessCoords, setGuessCoords] = useState(null);
  return (
    <div className="container">
      <div className="mapillary">
        <View />
      </div>
      <div className="timer">
        <Timer guessCoords={guessCoords} />
      </div>
      <div className="leaflet">
        <Map onGuess={setGuessCoords} />
      </div>
    </div>
  );
}

export default Game;
