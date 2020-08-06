import React from 'react';
import EnhancedUser from "./wings.js";
import './App.css';

const NAMES = [
"Isha",
"Ariana",
"Barsha", 
"Shirsaa",
"Arrzu"];

function App () {
    return(
      <div className="App">
        {NAMES.map((name) => (
          <EnhancedUser key={name} name={name}/>
        ))}
        </div>
    );
  }
export default App;