import "./Score.css";

function Score() {
  return (
    <div className="dashboard-container">
      <div className="top-row">
        <div className="box">deviation</div>
        <div className="box">score</div>
      </div>
      <div className="bottom-row">
        <div className="box">high score + etc</div>
      </div>
    </div>
  );
}

export default Score
