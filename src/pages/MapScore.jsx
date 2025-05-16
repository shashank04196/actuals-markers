import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapScore({ guessCoords, actualCoords }) {
    useEffect(() => {

        if (!guessCoords || !actualCoords) return;

        const map = L.map("map-score");

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        L.marker([guessCoords.lat, guessCoords.lng]).addTo(map);
        L.marker([actualCoords.lat, actualCoords.lng]).addTo(map);

        const bounds = L.latLngBounds(
            [guessCoords.lat, guessCoords.lng], [actualCoords.lat, actualCoords.lng]);
        map.fitBounds(bounds);
        // Clean up map on component unmount
        return () => {
            map.remove();
        };
    }, [guessCoords, actualCoords]);

    return <div id = "map-score"
    style = {
        { height: "100%", width: "100%" }
    } > < /div>;
}

export default MapScore;
