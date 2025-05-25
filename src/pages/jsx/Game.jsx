import React, { useState } from "react";
import "../css/Game.css";
import Map from "./Map";
import Timer from "./Timer";
import View from "./View";

function Game() {
    const [guessCoords, setGuessCoords] = useState(null);
    const [trueCoords, setTrueCoords] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    return ( <
        div className = "container" >
        <
        div className = "mapillary"
        style = {
            { position: "relative" }
        } >

        <
        View setTrueCoords = {
            setTrueCoords
        }
        setImageLoaded = { setImageLoaded }
        / >{!imageLoaded && ( <
        div className = "loader" >
        <
        span className = "loader-text" > Loading... < /span> <
        span className = "load" > < /span>  < /
        div >
    )
} < /
div > <
    div className = "timer" >
    <
    Timer guessCoords = { guessCoords }
defaultCoords = { trueCoords }
imageLoaded = { imageLoaded }
/> < /
div > <
    div className = "leaflet" >
    <
    Map onGuess = { setGuessCoords }
/> < /
div > <
    /div>
);
}

export default Game;