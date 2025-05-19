import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Timer.css";

function Timer({ guessCoords } = {}) {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    //XXX: for debug puposes only
    // Immediately navigate if coordinates are selected
    // if (guessCoords) {
    //   navigate("/Score", {
    //     state: {
    //       guessCoords,
    //     }
    //   });
    //   return;
    // }

    if (seconds === 0) {
      navigate("/Score", {
        state: {
          guessCoords, // No coordinates selected
        },
      });
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, navigate, guessCoords]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="timer-container">
      <div className="time">{formatTime(seconds)}</div>
    </div>
  );
}

export default Timer;
