import React from 'react';
import Counter from "./Counter.js";
import './App.css';

const NAMES = [
"Isha",
"Ariana",
"SrijanaK",
"Smrity", 
"Sami", 
"Kirtee",
"Orange",
"Trija",
"Sindhu",
"Kusum", 
"Elisha", 
"Rachana",
"Barsha",
"Uhmang", 
"Pooja",
"Bisikha", 
"Kritika",
"Srijana"];

function App () {
    return(
      <div className="App">
        {NAMES.map((name) => (
          <Counter key={name} name={name}>
            <h2> count </h2>
            </Counter>
        ))}
        </div>
    );
  }
export default App;
