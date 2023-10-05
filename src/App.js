import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';
import MainContent from './components/MainContent';
import TimeTable from './components/TimeTable';

import './App.css';



function App() {
  const [animationSpeed, setAnimationSpeedValue] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const handleSliderChange = (newValue) => {
    setAnimationSpeedValue(newValue); // Update the modified value
  };


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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Navbar /> <MainContent  /> </>} />
          <Route path="/aikataulu" element={<> <Header /> <Navbar /> <div className="App-content"> <TimeTable /> </div> </>} />
          <Route path="/yhteystiedot" element={<> <Header /> <Navbar /> <MainContent /> </>} />
          <Route path="/yhteistyokumppanit" element={<> <Header /> <Navbar /> <MainContent /> </>} />
          <Route path="/kaljakaupat" element={<> <Header /> <Navbar /> <MainContent /> </>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
