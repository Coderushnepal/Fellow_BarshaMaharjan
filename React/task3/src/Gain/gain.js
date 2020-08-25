import React from "react";
import {Link} from "react-router-dom";
import img from "./gain.png";


const Gain = () => (
    <div>
        <h2> I am gain </h2>
        <p> <Link to ="/"> Main </Link> </p>
        <p> <Link to ="/Rain"> Rain </Link> </p>
        <img src={img} alt="grow" width="1000px" height="500px" />
        </div>
);
export default Gain;