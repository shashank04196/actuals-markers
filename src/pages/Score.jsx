import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Score.css";
import MapScore from "./MapScore";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();
  const { guessCoords } = location.state || {};
  
  const [defaultLocation, setDefaultLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [score, setScore] = useState(null);

  // Function to generate random coordinates
  const generateRandomLocation = () => {
    // Random lat between -60 and 75 (avoiding extreme poles)
    const lat = Math.random() * 135 - 60;
    // Random lng between -180 and 180
    const lng = Math.random() * 360 - 180;
    return { lat, lng };
  };

  // Function to calculate distance between two coordinates in kilometers (Haversine formula)
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  }

  // Function to calculate score based on distance
  function calculateScore(distance) {
    // Max score of 5000 if exact location, decays the further away you are
    if (distance < 1) return 5000;
    if (distance < 10) return 5000 - distance * 100;
    if (distance < 100) return 4000 - (distance - 10) * 10;
    if (distance < 1000) return 3000 - (distance - 100);
    if (distance < 5000) return 2000 - (distance - 1000) / 4;
    if (distance < 10000) return 1000 - (distance - 5000) / 5;
    
    return 1; // More than 10,000 km away
  }

  // Generate random location and calculate distance/score
  useEffect(() => {
    if (!guessCoords) return;
    
    const randomLocation = generateRandomLocation();
    setDefaultLocation(randomLocation);

    const calculatedDistance = calculateDistance(
      guessCoords.lat,
      guessCoords.lng,
      randomLocation.lat,
      randomLocation.lng
    );
    setDistance(calculatedDistance);
    setScore(calculateScore(calculatedDistance));
  }, [guessCoords]);

  if (!guessCoords) {
    return (
      <div className="dashboard-container">
        <div className="top-row">
          <div className="box">No location selected!</div>
          <div className="box">Score: 0</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="top-row">
        <div className="box">
          <MapScore 
            guessCoords={guessCoords} 
            defaultLocation={defaultLocation} 
          />
        </div>
        <div className="box">
          <div className="score-details">
            <h2>Your Score</h2>
            <h3>{score ? Math.round(score) : "Calculating..."}</h3>
            <div className="detail-item">
              <span className="detail-label">Your guess:</span>
              <span className="detail-value">
                {guessCoords.lat.toFixed(5)}°, {guessCoords.lng.toFixed(5)}°
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Target location:</span>
              <span className="detail-value">
                {defaultLocation ? `${defaultLocation.lat.toFixed(5)}°, ${defaultLocation.lng.toFixed(5)}°` : "Generating..."}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Distance:</span>
              <span className="detail-value">
                {distance ? `${distance.toFixed(2)} km` : "Calculating..."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;