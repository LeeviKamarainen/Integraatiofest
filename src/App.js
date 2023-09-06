import logo from './assets/images/norppa.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';



function App() {
  const [animationSpeed, setAnimationSpeedValue] = useState(1);

  const handleSliderChange = (newValue) => {
    setAnimationSpeedValue(newValue); // Update the modified value
  };
  const targetDate = '2023-11-10T00:00:00'
  return (
    <div className="App" >
      <header className="App-header">
        <div className="App-background">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="counter-wrapper">
          <span className="counter-title">Integraatiofesteihin aikaa:</span>
          <CountdownTimer className="App-counter" targetDate={targetDate} animationSpeed={animationSpeed} />
        </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
