import "./Score.css";
import MapScore from "./MapScore";
import { useLocation } from "react-router-dom";
function Score() {
  const location = useLocation();
  const { guessCoords } = location.state || {};
  return (
    <div className="dashboard-container">
      <div className="top-row">
        <div className="box">
          < MapScore guessCoords={guessCoords} />
        </div>
        <div className="box">score</div>
      </div>
      <div className="bottom-row">
        <div className="box">high score + etc</div>
      </div>
    </div>
  );
}

export default Score
