import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import Home from './components/Home';
import Map from './components/Map';
import InEnglish from './components/InEnglish';
import FestEnded from './components/FestEnded';
import FestHype from './components/FestHype';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Navbar /> <Home />  <Footer /> </>} />
          <Route path="/aikataulu" element={<> <Header /> <Navbar /> <Schedule /> <Footer /> </>} />
          <Route path="/kartta" element={<> <Header /> <Navbar /> <Map /> <Footer /> </>} />
          <Route path="/hypetys" element={<> <Header /> <Navbar /> <FestHype /> <Footer /> </>} />
          <Route path="/english" element={<> <Header /> <Navbar /> <InEnglish /> <Footer /> </>} />
          <Route path="/loppu" element={<> <FestEnded /> </>} />
          {/* <Route path="/majoitus" element={<> <Header /> <Navbar /> <Accommodation /> <Footer /> </>} />
          <Route path="/in-english" element={<> <Header /> <Navbar /> <English /> <Footer /> </>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
