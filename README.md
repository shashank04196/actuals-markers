# Street Wanderer

Street Wanderer is a game about observation and geography. Players explore random street-level imagery from Mapillary and try to guess their location on a map. The closer your guess, the higher your score!

---

## Features

- Random street view imagery using Mapillary API  
- Interactive Leaflet map to make guesses  
- Score calculation based on distance from true location  
- 60 Second Countdown! 
 

---



## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)  
- npm or yarn  

### Setup

1. Clone the repository:

   ```powershell
   git clone https://github.com/yourusername/street-wanderer.git
   cd street-wanderer

   
## Install dependencies
npm install

## Create a .env file in the root directory and add your Mapillary API token:
VITE_MAPILLARY_TOKEN=your_mapillary_access_token_here

## Start the development server
npm run dev

Open your browser at http://localhost:5173 (the port your dev server uses)

## Usage
 - Click Play on the home page to start a new game.
 - Explore the street view and try to guess the location by clicking on the map.
 - Submit your guess to see your score and the distance from the true location.
 - Repeat and try to improve your score!

## Technologies Used
 - React
 - React Router
 - Leaflet for interactive maps
 - Mapillary for street-level imagery
 - 
## Folder Structure
src/
|-- pages/
|   |--jsx/
│     |-- Game.jsx
│     |-- Home.jsx
│     |-- Map.jsx
│     |-- Score.jsx
│     |-- Timer.jsx
│     |-- View.jsx
|     |-- MapScore.jsx
|--|--css/
|     |--Game.css
|     |--Home.css
|     |--Score.css
|     |--Timer.css
│    
|--App.jsx
|--App.css
|--Index.css
|--main.jsx


## Contributing
Feel free to open issues or submit pull requests if you'd like to improve the game!

## Acknowledgements
 - Mapillary for providing the street imagery API
 - Leaflet for the mapping library
