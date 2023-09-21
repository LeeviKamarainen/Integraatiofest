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
import promoVideoThumbnail from './assets/images/videoThumbnail.png';

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
        <img src={titleLogo} className="App-header-logo" alt="headerLogo" />
      </header>
      <div className="App-content">
        <div className="content-wrapper">
          <div className="countdown-wrapper">
              <h1 className="countdown-title" >Integraatiofestheihin aikaa</h1>
              <CountdownTimer targetDate={targetDate} />
          </div>
          <div className="flex-container">
            <div className="flex-wrapper timetable">
              <h1 className="timetable-title">Alustava aikataulu</h1>
              <ul className="timetable-list">
                <h3 className="timetable-list-title">Perjantai</h3>
                <li className="timetable-list-item">17:00 - 18:00 Kaljaa</li>
                <li className="timetable-list-item">18:00 - 19:00 Illallinen</li>
                <li className="timetable-list-item">19:00 - 20:00 Sauna</li>
                <li className="timetable-list-item">20:00 - 04:00 Lisää kaljaa</li>

                <h3 className="timetable-list-title">Lauantai</h3>
                <li className="timetable-list-item">10:00 - 11:00 Aamupala</li>
                <li className="timetable-list-item">11:00 - 12:00 Kaljaa</li>
                <li className="timetable-list-item">12:00 - 13:00 Lounas</li>
                <li className="timetable-list-item">13:00 - 04:00 Kaljaa</li>

                <h3 className="timetable-list-title">Sunnuntai</h3>
                <li className="timetable-list-item">10:00 - 11:00 Palju</li>
                <li className="timetable-list-item">11:00 - 12:00 Sauna</li>
                <li className="timetable-list-item">12:00 - 13:00 Lounas</li>
                <li className="timetable-list-item">13:00 - 14:00 Siivous</li>
                <li className="timetable-list-item">14:00 - 15:00 Kotiinlähtö</li>
                <li className="timetable-list-item">15:00 - 00:00 Kaljaa</li>
              </ul>
            </div>
            <div className="flex-wrapper video">
              <h2 className="video-title">🤫</h2>
              <ReactPlayer className="react-player" url={promoVideo} controls width='100%' height='90%'/>
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
