import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/NavBar';
import MainContent from './components/MainContent';
import TimeTable from './components/Schedule';
import Footer from './components/Footer';
import Example from './components/Example';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Navbar /> <TimeTable />  </>} />
          <Route path="/aikataulu" element={<> <Header /> <Navbar /> <TimeTable /> </>} />
          <Route path="/yhteystiedot" element={<> <Header /> <Navbar /> <MainContent /> <Footer /> </>} />
          <Route path="/saapuminen" element={<> <Header /> <Navbar /> <MainContent /> </>} />
          <Route path="/kartta" element={<> <Header /> <Navbar /> <MainContent /> </>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
