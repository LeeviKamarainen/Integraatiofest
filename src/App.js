import logo from './assets/images/norppa.png';
import './App.css';
import promoVideo from './assets/videos/promoVideo1.mp4';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import Slider from './components/Slider';
import LeftNav from './components/LeftNav'
import BackgroundVideo from './components/BackgroundVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Back } from 'react-bootstrap-icons';






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
      console.log(animationSpeed)
      setAnimationSpeedValue(animationSpeed+0.2);
      setAnimationStarted(true);
    }
  };


  return (
    <div className="App" >
      <header className="App-header">
        <div className="App-background">
          <BackgroundVideo />
            <div className="content-wrapper">
              <span className="counter-title">Integraatiofesteihin aikaa:</span>
              <CountdownTimer className="App-counter" targetDate={targetDate} animationSpeed={animationSpeed}  />
            </div>
          <LeftNav></LeftNav>
        </div>
      </header>
    </div>
  );
}

export default App;
