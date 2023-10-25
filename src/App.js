import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import Example from './components/SponsorBar';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Navbar /> <Schedule />  <Footer /> </>} />
          <Route path="/aikataulu" element={<> <Header /> <Navbar /> <Example /> <Footer /> </>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
