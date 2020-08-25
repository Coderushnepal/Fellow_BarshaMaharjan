import React from "react";
import {Link} from "react-router-dom";
import img from "./rainc.jpg";

const Rain = () => (
    <div>
        <h2> I am rain </h2>
        <p> <Link to ="/"> Main </Link> </p>
        <p> <Link to ="/Gain"> Gain </Link> </p>
        <img src={img} alt=" code" width="1200px" height="600px" />
        </div>
);
export default Rain;