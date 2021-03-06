import React from "react";
import "./App.css";
import LeafletMap from "./LeafletMap";
import logo from "./images/logo.png";
import facebook from "./images/facebook.png";
import email from "./images/email.png";

function App() {
  return (
    <div className="App">
      <div className="col-11 mb-2">
        <img className="Logo" src={logo} alt="Company Logo" />
        <h1>Welcome to FarmQ</h1>

        <div>
          <h3>Our mission</h3>
          <p>
            FarmQ is a digital farmer's market app that lets you buy fresh
            produce from your local suppliers. Our mission is to encourage
            people to choose more locally produced, while getting to know the
            food producers in the area.
          </p>

          <LeafletMap />
        </div>
      </div>

      <div className="Footer">
        <footer className="col-11 mb-2">
          <h3>Contact us</h3>
          <p>Project built by Anastasia Pirvu as part of CodeOp's web development bootcamp.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
