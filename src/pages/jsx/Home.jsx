import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
    return ( < div class = "homeContainer" > <

        h1 className = "title" > Street Wanderer < /h1> <
        Link to = "/Game" >
        <
        button className = "Play" > Play < /button> </Link >
        <
        /div>
    );
}

export default Home;