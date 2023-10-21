import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/SponsorBar.css'

import kotipizza from '../assets/sponsors/Kotipizza_logo_vihrea_RGB.jpg'
import loimu from '../assets/sponsors/loimu_vaaka_RGB.png'
import syncronTech from '../assets/sponsors/syncron_tech.png'
import visma from '../assets/sponsors/visma_logo.jpg'

function SponsorBar() {
    const settings = {
      className: "center variable-width",
      arrows: false,
      centerMode: true,
      centerPadding: "10px",
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="content-wrapper sponsor-bar">
        <h2 className="sponsor-title">Sponssit jotain tähän </h2>
        <Slider {...settings} >
            <Link to="https://kotipizza.fi" >
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 50,
                        md: 100,
                      },
                      width: {
                        xs: 100,
                        md: 200,
                      },
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
            <Link to="https://kotipizza.fi">
                <Box
                    component="img"
                    sx={{
                      height: 100,
                      width: 200,
                      backgroundColor: 'white',
                    }}
                    alt="Kotipizza"
                    src={visma}
                />
              </Link>
        </Slider>
      </div>
    );
  }

export default SponsorBar;