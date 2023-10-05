import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import CountdownTimer from './components/CountdownTimer';
import LeftNav from './components/LeftNav'
import TimeTable from './components/TimeTable'


import logo from './assets/images/norppa.png';
import promoVideo from './assets/videos/promoVideo1.mp4';
import titleLogo from './assets/images/title.png';
import titleLogoOld from './assets/images/titleOld.png';

import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';


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
    <>
      <Header />
      <Navbar />
      <div className="App-bg">
        <span>TESTI MOI! :)</span>
      </div>
    </>
  );
}

export default App;
