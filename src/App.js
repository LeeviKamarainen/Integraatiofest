import logo from './assets/images/norppa.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import Slider from './components/Slider';
import LeftNav from './components/LeftNav'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {
  const [animationSpeed, setAnimationSpeedValue] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const handleSliderChange = (newValue) => {
    setAnimationSpeedValue(newValue); // Update the modified value
  };
  const targetDate = '2023-11-10T00:00:00'

  const handleClick = () => {
    // Increment the click count when the image is clicked.
    setClickCount(clickCount + 1);
    // Check if the image has been clicked five times.
    if (clickCount >= 5) {
      // Start the animation.
      setAnimationStarted(true);
    }
  };


  return (
    <div className="App" >
      <header className="App-header">
        <div className="App-background">
          { <img src={logo} className="App-logo" alt="logo" onClick={handleClick} data-animate={animationStarted}/> }
          <div className="counter-wrapper">
            <span className="counter-title">Integraatiofesteihin aikaa:</span>
            <CountdownTimer className="App-counter" targetDate={targetDate} animationSpeed={animationSpeed} />
          </div>
        <LeftNav></LeftNav>
        </div>

      </header>

    </div>
  );
}

export default App;
