import logo from './norppa.png';
import bground from './bground.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import Slider from './components/Slider';
import BottomNav from './components/BottomNav'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [animationSpeed, setAnimationSpeedValue] = useState(1);

  const handleSliderChange = (newValue) => {
    setAnimationSpeedValue(newValue); // Update the modified value
  };
  const targetDate = '2023-11-10T00:00:00'
  return (
    <div className="App" style={{
      backgroundImage: `url(${bground})`,
      backgroundSize: 'cover',
      height: '100vh',
    }}>
      <div className="App-counter">
        <CountdownTimer targetDate={targetDate} animationSpeed={animationSpeed} />
        {/* <Slider onSliderChange={handleSliderChange} />
        <img src={logo} className="App-logo" alt="logo"style={{
          animationDuration: `${20 / animationSpeed}s`
          }}/> */}
      </div>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
