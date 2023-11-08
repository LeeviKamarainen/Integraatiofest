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
import Accommodation from './components/Accommodation';

// English versions
import NavbarEN from './components/english/NavBarEN';
import HomeEN from './components/english/HomeEN';
import FooterEN from './components/english/FooterEN';
import ScheduleEN from './components/english/ScheduleEN';
import MapEN from './components/english/MapEN';
import AccommodationEN from './components/english/AccommodationEN';
import ContactEN from './components/english/ContactEN';
import FestHypeEN from './components/english/FestHypeEN';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Navbar /> <Home />  <Footer /> </>} />
          <Route path="/aikataulu" element={<> <Header /> <Navbar /> <Schedule /> <Footer /> </>} />
          <Route path="/kartta" element={<> <Header /> <Navbar /> <Map /> <Footer /> </>} />
          <Route path="/majoitus" element={<> <Header /> <Navbar /> <Accommodation /> <Footer /> </>} />
          <Route path="/hype" element={<> <Header /> <Navbar /> <FestHype /> <Footer /> </>} />
          <Route path="/english" element={<> <Header /> <Navbar /> <InEnglish /> <Footer /> </>} />
          <Route path="/loppu" element={<> <FestEnded /> </>} />

          <Route path="/en" element={<> <NavbarEN /> <HomeEN /> <FooterEN /> </>} />
          <Route path="/en/schedule" element={<> <NavbarEN /> <ScheduleEN /> <FooterEN /> </>} />
          <Route path="/en/map" element={<> <NavbarEN /> <MapEN /> <FooterEN /> </>} />
          <Route path="/en/accommodation" element={<> <NavbarEN /> <AccommodationEN /> <FooterEN /> </>} />
          <Route path="/en/contact" element={<> <NavbarEN /> <ContactEN /> <FooterEN /> </>} />
          <Route path="/en/hype" element={<> <NavbarEN /> <FestHypeEN /> <FooterEN /> </>} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
