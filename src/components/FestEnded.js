import React, { useState, useMemo } from 'react';
import { Typography, Button } from '@mui/material';

import Header from './Header';
import Navbar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import kolmio from '../assets/videos/kolmio.mp4';

import '../assets/styles/FestEnded.css';
import 'animate.css';

function FestEnded() {
    const [dismissed, setDismissed] = useState(false);

    const shouldShowMessage = useMemo(() => {
      if (dismissed) {
        // If the message has been dismissed, don't show it.
        return false;
      }
      
      const hasShownMessage = sessionStorage.getItem('hasShownMessage');
      return !hasShownMessage;
    }, [dismissed]);
  
    const handleDismiss = () => {
      sessionStorage.setItem('hasShownMessage', 'true');
      setDismissed(true);
    };

    return (
        shouldShowMessage ? (
        <div className="festended-message">
            <div className="message-content">
            <video loop autoPlay muted playsInline width="100%" height="100%" className="message-video animate__animated animate__bounceIn animate__delay-5s">
                <source src={kolmio} type="video/mp4" />
             </video>
            <Typography sx={{ typography: {xs: 'h5', sm: 'h3', md: 'h2', lg: 'h2', xl: 'h1'}}} className="message-title"> LATEKSII ry kiittää festikansaa  </Typography>
            <Typography sx={{ typography: {xs: 'body1', sm: 'h5', md:'h4', lg: 'h4'}}} className="message-title secondary">Nähdään taas ensivuonna </Typography>
            <Button variant="contained" className="message-button" onClick={handleDismiss}>Jatka sivustolle</Button>
            <Typography variant='h4' className="animate__animated animate__bounceIn animate__delay-5s message-secret">π<sup>2</sup> = g</Typography>
            </div>
        </div>
        ) : (
        <>
        <Header /> <Navbar /> <Home />  <Footer />
        </>
        )
    );
}

export default FestEnded;
