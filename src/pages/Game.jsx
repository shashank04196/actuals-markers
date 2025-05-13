import React from "react";
import "./Game.css";
import Map from "./Map";
import Timer from "./Timer";

function Game() {
  return (
    <div className="container">
      <div className="mapillary">mapillary</div>
      <div className="timer">
        <Timer />
      </div>
      <div className="leaflet">
        <Map />
      </div>
    </div>
  );
}

export default Game;
