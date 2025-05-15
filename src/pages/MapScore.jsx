import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapScore({guessCoords}) {
  useEffect(() => {
    if (!guessCoords) return;
    const map = L.map("map").setView([guessCoords.lat, guessCoords.lng], 5);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([guessCoords.lat, guessCoords.lng]).addTo(map);

    // Clean up map on component unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }}></div>;
}

export default MapScore;
