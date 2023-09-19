import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import Slider from './components/Slider';
import LeftNav from './components/LeftNav'
import BackgroundVideo from './components/BackgroundVideo';
import { Back } from 'react-bootstrap-icons';
import ReactPlayer from 'react-player';

import logo from './assets/images/norppa.png';
import promoVideo from './assets/videos/promoVideo1.mp4';
import titleLogo from './assets/images/title.png';

import './App.css';
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
      console.log(animationSpeed)
      setAnimationSpeedValue(animationSpeed+0.2);
      setAnimationStarted(true);
    }
  };


  return (
    <div className="App" >
      <header className="App-header">
        <img src={titleLogo} className="App-title-logo" alt="titleLogo" />
      </header>
      <div className="App-background">
          <img src={logo} className="App-logo" alt="logo" onClick={handleClick} data-animate={animationStarted} style={{animationDuration: `${20 / animationSpeed}s`}}/>
            <div className="content-wrapper">
              <h1 className="App-title">Jotain jotain</h1>
              <ReactPlayer className="react-player" url={promoVideo} controls width='100%' height='90%'/>
            </div>
            <div className="countdown-wrapper">
              <h2 className="countdown-title" >Timer</h2>
              <CountdownTimer targetDate={targetDate} />
            </div>
          <LeftNav></LeftNav>
        </div>
    </div>
  );
}

export default App;
