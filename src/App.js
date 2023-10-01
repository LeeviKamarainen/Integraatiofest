import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import LeftNav from './components/LeftNav'
import ReactPlayer from 'react-player';
import TimeTable from './components/Timetable';

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
  const targetDate = '2023-11-10T10:00:00'

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
        <img src={titleLogo} className="App-header-logo" alt="headerLogo" />
      </header>
      <div className="App-content">
        <div className="content-wrapper">
          <div className="countdown-wrapper">
              <h1 className="countdown-title" >Integraatiofesteihin aikaa</h1>
              <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex-container">
            <div className="flex-wrapper timetable">
              <h1 className="timetable-title">Alustava aikataulu</h1>
              <TimeTable />
            </div>
            <div className="flex-wrapper video">
              <h2 className="video-title">🤫</h2>
              <ReactPlayer className="react-player" url={promoVideo} controls width='90%' height='100%'/>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" onClick={handleClick} data-animate={animationStarted} style={{animationDuration: `${20 / animationSpeed}s`}}/>
        <LeftNav></LeftNav>
      </div>
    </div>
  );
}

export default App;
