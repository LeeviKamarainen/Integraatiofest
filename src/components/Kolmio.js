import React from 'react';
import kolmio from '../assets/videos/kolmio.mp4';
import '../assets//styles/Kolmio.css'; // Import the CSS file for styling

function Kolmio() {
  return (
    <div className="video-wrapper">
      <video autoPlay muted loop playsInline className="kolmio-video">
        <source src={kolmio} type="video/mp4" />
      </video>
    </div>
  );
}

export default Kolmio;
