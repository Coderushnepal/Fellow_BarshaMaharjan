import React from "react";
import {Link} from "react-router-dom";
import img from "./main.jpg";


const Main = () => (
    <div>
        <h2> I am Main </h2>
        <p> <Link to ="/Rain"> Rain </Link> </p>
        {/* <img src={img} alt=" work" /> */}
        <img src={img} alt="work" width="1400px" height="500px" />
        </div>
);
export default Main;