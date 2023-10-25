import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/SponsorBar.css'

import tek from '../assets/sponsors/TEK_logo_RGB_slogan.png'
import lprVertical from '../assets/sponsors/LPR_events_pysty1.png'
import kotipizza from '../assets/sponsors/Kotipizza_logo_vihrea_RGB.jpg'
import visma from '../assets/sponsors/visma_logo.jpg'
import syncronTech from '../assets/sponsors/syncron_tech.png'
import loimu from '../assets/sponsors/loimu_vaaka_RGB.png'
import danfoss from '../assets/sponsors/Danfoss_logo_color.png'
import lasPalmas from '../assets/sponsors/LasPalmas_logo_color.jpg'
import upm from '../assets/sponsors/UPM_Company-Logo_RGB.png'
import lut from '../assets/sponsors/LUT_logo_black_text.png'

function SponsorBar() {

    const randomNumber = (min, max) => {
      const rand = Math.floor(Math.random() * (max - min) + min);
      // console.log("Sponsor bar start index: " + rand);
      return rand
    }

    const settings = {
      className: "slider variable-width",
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      initialSlide: randomNumber(0, 10),
      variableWidth: true,
    };

    return (
      <div className="content-wrapper sponsor-bar">
        <h2 className="sponsor-title">Tapahtumaa mahdollistamassa</h2>
        <Slider {...settings} >
            <Link to="https://www.tek.fi/" target="_blank" >
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 200,
                      },
                      }}
                    alt="TEK"
                    src={tek}
                />
            </Link>
            <Link to="https://lappeenrantaevents.fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      paddingTop: 2,
                      height: {
                        xs: 50,
                        sm: 50,
                        md: 50,
                        lg: 50,
                        xl: 65,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 200,
                        lg: 300,
                        xl: 400,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Lappeenranta Events"
                    src={lprVertical}
                />
            </Link>
            <Link to="https://kotipizza.fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 95,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 180,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Kotipizza"
                    src={kotipizza}
                />
            </Link>
            <Link to="https://www.visma.fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 200,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Visma"
                    src={visma}
                />
              </Link>
              <Link to="https://www.syncrontech.com/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 200,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Syncron Tech"
                    src={syncronTech}
                />
              </Link>
              <Link to="https://www.loimu.fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 200,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Loimu"
                    src={loimu}
                />
              </Link>
              <Link to="https://www.danfoss.com/fi-fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 200,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Danfoss"
                    src={danfoss}
                />
              </Link>
              <Link to="https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 110,
                      },
                      width: {
                        xs: 120,
                        sm: 120,
                        md: 120,
                        lg: 150,
                        xl: 180,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="Las Palmas"
                    src={lasPalmas}
                />
              </Link>
              <Link to="https://www.upm.com/fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 90,
                        sm: 90,
                        md: 90,
                        lg: 90,
                        xl: 110,
                      },
                      width: {
                        xs: 100,
                        sm: 100,
                        md: 100,
                        lg: 120,
                        xl: 140,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="UPM"
                    src={upm}
                />
              </Link>
              <Link to="https://www.lut.fi/" target="_blank">
                <Box
                    component="img"
                    sx={{
                      height: {
                        xs: 80,
                        sm: 80,
                        md: 80,
                        lg: 80,
                        xl: 100,
                      },
                      width: {
                        xs: 150,
                        sm: 150,
                        md: 150,
                        lg: 150,
                        xl: 250,
                      },
                      backgroundColor: 'white',
                    }}
                    alt="LUT-yliopisto"
                    src={lut}
                />
              </Link>
        </Slider>
      </div>
    );
  }

export default SponsorBar;