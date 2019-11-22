// Add state for the data you'll be getting from NASA.
import React from "react";
import AstronomyContainer from "./app/components/AstronomyContainer";
import logo from "./assets/logo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo}
        alt="NASA oficial logo" /> 
        <h1>Welcome! Enjoy our beautiful space.</h1>
        <AstronomyContainer />
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun 🚀!
        </p> */}
      </div>
    </div>
  );
}

export default App;
