import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/SponsorBar.css'

import kotipizza from '../assets/sponsors/Kotipizza_logo_vihreä_RGB.jpg'
import loimu from '../assets/sponsors/loimu-vaaka-RGB.png'
import syncronTech from '../assets/sponsors/syncron_tech.png'

function SponsorBar() {
    const settings = {
      className: "center variable-width",
      arrows: false,
      centerMode: true,
      centerPadding: "10px",
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };

    return (
      <div className="content-wrapper sponsor-bar">
        <h2 className="sponsor-title">Sponssit jotain tähän </h2>
        <Slider {...settings}>
            <Link to="https://kotipizza.fi" style={{width: 220}}>
                <Box
                    component="img"
                    sx={{
                        height: 100,
                        width: 180,
                    }}
                    alt="Kotipizza"
                    src={kotipizza}
                />
            </Link>
            <Link to="https://kotipizza.fi">
                <Box
                    component="img"
                    sx={{
                      height: 100,
                      width: 200,
                      backgroundColor: 'white',
                    }}
                    alt="Kotipizza"
                    src={loimu}
                />
            </Link>
            <Link to="https://kotipizza.fi">
                <Box
                    component="img"
                    sx={{
                      height: 100,
                      width: 200,
                      backgroundColor: 'white',
                    }}
                    alt="Kotipizza"
                    src={syncronTech}
                />
            </Link>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }

export default SponsorBar;