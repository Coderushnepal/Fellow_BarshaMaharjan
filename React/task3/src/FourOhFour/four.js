import React from "react";
import {useRouteMatch} from 'react-router-dom';
 
import "./four.css";
 
const FourohFour = () => {
    const {url}=useRouteMatch();
    return (
  <div className="four-oh-four">
    <h5>404</h5>
    <p>{url} doesnot exist.</p>
  </div>
  );
};
 
export default FourohFour;