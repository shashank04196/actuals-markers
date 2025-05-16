import "./Score.css";
import MapScore from "./MapScore";
import { useLocation } from "react-router-dom";
import { act } from "react";

function Score() {
    const location = useLocation();
    const { guessCoords, actualCoords } = location.state || {};
    return ( <
        div className = "dashboard-container" >
        <
        div className = "top-row" >
        <
        div className = "box" >
        <
        MapScore guessCoords = { guessCoords }
        actualCoords = {
            actualCoords
        }
        / > < /
        div > <
        div className = "box" > score < /div> < /
        div > <
        div className = "bottom-row" >
        <
        div className = "box" > high score + etc < /div> < /
        div > <
        /div>
    );
}

export default Score
