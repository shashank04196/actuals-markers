import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds === 0) {
      navigate("/Score");
      return;
    }

    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, navigate]);

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
