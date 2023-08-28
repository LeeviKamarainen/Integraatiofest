import logo from './norppa.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
function App() {
  const targetDate = '2023-11-10T00:00:00'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Integraatiofest soon<sup>TM</sup>
        </p>
        
      <CountdownTimer targetDate={targetDate}/>
      </header>
      
    </div>
  );
}

export default App;
