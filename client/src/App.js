import React from 'react';
import './App.css';
import LeafletMap from "./LeafletMap";
import logo from './images/logo.png';
import facebook from './images/facebook.png';
import email from './images/email.png';


function App() {

  
  return (

    <div className="App">
   <div className="col-10 mb-3">
   <img src={logo} alt="Company Logo" height={100} width={140}/>
    <h1>Welcome to FarmQ</h1>

    
    <div>
      <h3>Our mission</h3>
      <p>FarmQ is a digital farmer's market app that lets you buy fresh produce from your local suppliers. Our mission is to encourage people to choose local, while at the same time getting to know the food producers nearby.</p>
      
   

  <LeafletMap/> 

  </div>
  </div>

<footer className="col-10 mb-3">
    <h3>Get in touch</h3>
    <img src={facebook} alt="Facebook Logo" height={50} width={50} />
    <img src={email} alt="Email Logo" height={50} width={50}/>
    
</footer>

</div>
  )

};



  
export default App
