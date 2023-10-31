import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import { IdResponsiveRenderOnlyIn, Responsive } from 'responsive-react';
import {Typography} from '@mui/material/';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/SponsorBar.css'

import tek from '../assets/sponsors/TEK_logo_RGB_slogan.png'
import lprVertical from '../assets/sponsors/LPR_events_pysty1.png'
import kotipizza from '../assets/sponsors/Kotipizza_logo_vihrea_RGB.png'
import visma from '../assets/sponsors/visma_logo_original.jpg'
import syncronTech from '../assets/sponsors/syncron_tech.png'
import loimu from '../assets/sponsors/loimu_vaaka_RGB.png'
import danfoss from '../assets/sponsors/Danfoss_logo_color.png'
import lasPalmas from '../assets/sponsors/LasPalmas_logo_color.png'
import upm from '../assets/sponsors/UPM_Company-Logo_RGB.png'
import lut from '../assets/sponsors/LUT_logo_black_text.png'
import emblica from '../assets/sponsors/emblica-logo-blue.png'
import cafeGbar from '../assets/sponsors/g_no_bg.png'
import viba from '../assets/sponsors/viba_logo_black.png'

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
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      initialSlide: randomNumber(0, 10),
      variableWidth: true,
    };

    const settings2 = {
      className: "slider",
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: "10px",
      autoplay: false,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      initialSlide: randomNumber(0, 10)
    };

    return (
      <div className="content-wrapper sponsor-bar">
        <Responsive displayIn={[IdResponsiveRenderOnlyIn.Tablet, IdResponsiveRenderOnlyIn.Laptop]}>
          <Typography variant='h6' className="sponsor-title">Festejä mahdollistamassa</Typography>
          <Slider {...settings} >
              <Link to="https://www.tek.fi/" target="_blank" classname="sponsor-link" >
                  <Box
                      sx={{
                        height: {
                          xs: 112,
                          sm: 112,
                          md: 124,
                          lg: 124,
                          xl: 124,
                        },
                        width: {
                          xs: 200,
                          sm: 200,
                          md: 220,
                          lg: 220,
                          xl: 220,
                        },
                        }}>
                    <img src={tek} alt="TEK logo" className="sponsor-logo" width="200px" height="120px"/>
                  </Box>
              </Link>
              <Link to="https://lappeenrantaevents.fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        marginTop: {
                          xs: 5,
                          sm: 2
                        },
                        height: {
                          xs: 38,
                          sm: 76,
                          md: 76,
                          lg: 76,
                          xl: 76,
                        },
                        width: {
                          xs: 150,
                          sm: 300,
                          md: 300,
                          lg: 300,
                          xl: 300,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Lappeenranta Events"
                      src={lprVertical}
                  />
              </Link>
              <Link to="https://kotipizza.fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 105,
                          sm: 105,
                          md: 105,
                          lg: 105,
                          xl: 105,
                        },
                        width: {
                          xs: 150,
                          sm: 150,
                          md: 150,
                          lg: 150,
                          xl: 150,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Kotipizza"
                      src={kotipizza}
                  />
              </Link>
              <Link to="https://www.visma.fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 100,
                          sm: 100,
                          md: 100,
                          lg: 100,
                          xl: 100,
                        },
                        width: {
                          xs: 279,
                          sm: 279,
                          md: 279,
                          lg: 279,
                          xl: 279,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Visma"
                      src={visma}
                  />
                </Link>
                <Link to="https://www.syncrontech.com/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 110,
                          sm: 110,
                          md: 110,
                          lg: 110,
                          xl: 110,
                        },
                        width: {
                          xs: 163,
                          sm: 163,
                          md: 163,
                          lg: 163,
                          xl: 163,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Syncron Tech"
                      src={syncronTech}
                  />
                </Link>
                <Link to="https://www.loimu.fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 92,
                          sm: 92,
                          md: 92,
                          lg: 92,
                          xl: 92,
                        },
                        width: {
                          xs: 250,
                          sm: 250,
                          md: 250,
                          lg: 250,
                          xl: 250,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Loimu"
                      src={loimu}
                  />
                </Link>
                <Link to="https://www.danfoss.com/fi-fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 103,
                          sm: 103,
                          md: 103,
                          lg: 103,
                          xl: 103,
                        },
                        width: {
                          xs: 250,
                          sm: 250,
                          md: 250,
                          lg: 250,
                          xl: 250,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Danfoss"
                      src={danfoss}
                  />
                </Link>
                <Link to="https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 127,
                          sm: 127,
                          md: 127,
                          lg: 127,
                          xl: 127,
                        },
                        width: {
                          xs: 180,
                          sm: 180,
                          md: 180,
                          lg: 180,
                          xl: 180,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="Las Palmas"
                      src={lasPalmas}
                  />
                </Link>
                <Link to="https://www.upm.com/fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 130,
                          sm: 130,
                          md: 130,
                          lg: 130,
                          xl: 130,
                        },
                        width: {
                          xs: 130,
                          sm: 130,
                          md: 130,
                          lg: 130,
                          xl: 130,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="UPM"
                      src={upm}
                  />
                </Link>
                <Link to="https://www.lut.fi/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 111,
                          sm: 111,
                          md: 111,
                          lg: 111,
                          xl: 111,
                        },
                        width: {
                          xs: 250,
                          sm: 250,
                          md: 250,
                          lg: 250,
                          xl: 250,
                        },
                        backgroundColor: 'white',
                      }}
                      alt="LUT-yliopisto"
                      src={lut}
                  />
                </Link>
                <Link to="https://emblica.com/" target="_blank" classname="sponsor-link">
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 64,
                          sm: 64,
                          md: 64,
                          lg: 64,
                          xl: 64,
                        },
                        width: {
                          xs: 300,
                          sm: 300,
                          md: 300,
                          lg: 300,
                          xl: 300,
                        },
                        backgroundColor: 'white',
                        margin: '2rem'
                      }}
                      alt="Emblica"
                      src={emblica}
                  />
                </Link>
                <Link >
                  <Box
                      component="img"
                      sx={{
                        height: {
                          xs: 150,
                          sm: 150,
                          md: 150,
                          lg: 150,
                          xl: 150,
                        },
                        width: {
                          xs: 150,
                          sm: 150,
                          md: 150,
                          lg: 150,
                          xl: 150,
                        },
                        backgroundColor: 'white',
                        paddingBottom: '1rem'
                      }}
                      alt="Viba"
                      src={viba}
                  />
                </Link>
          </Slider>
        </Responsive>

        <Responsive displayIn={IdResponsiveRenderOnlyIn.Mobile}>
          <Typography variant='h6' className="sponsor-title">Festejä mahdollistamassa</Typography>
          <Slider {...settings2} >
              <Link to="https://www.tek.fi/" target="_blank" >
                <img src={tek} alt="TEK logo" width="249px" height="140px" className="sponsor-logo-mobile" style={{ marginTop: "-10px"}}/>
              </Link>
              <Link to="https://lappeenrantaevents.fi/" target="_blank">
                <img src={lprVertical} alt="Lappeenranta Event logo" width="300px" height="76px" className="sponsor-logo-mobile" style={{ marginTop: "25px"}}/>
              </Link>
              <Link to="https://kotipizza.fi/" target="_blank">
                <img src={kotipizza} alt="Kotipizza logo" width="157px" height="110px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.visma.fi/" target="_blank">
                <img src={visma} alt="Visma logo" width="335px" height="120px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.syncrontech.com/" target="_blank">
                <img src={syncronTech} alt="Syncron Tech logo" width="163px" height="110px" className="sponsor-logo-mobile" style={{ marginTop: "5px"}}/>
              </Link>
              <Link to="https://www.loimu.fi/" target="_blank">
                <img src={loimu} alt="Loimu logo" width="250px" height="92px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.danfoss.com/fi-fi/" target="_blank">
                <img src={danfoss} alt="Danfoss logo" width="250px" height="103px" className="sponsor-logo-mobile" style={{ marginTop: "10px"}}/>
              </Link>
              <Link to="https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta" target="_blank">
                <img src={lasPalmas} alt="Las Palmas logo" width="180px" height="127px" className="sponsor-logo-mobile" style={{ marginTop: "-5px"}}/>
              </Link>
              <Link to="https://www.upm.com/fi/" target="_blank">
                <img src={upm} alt="UPM logo" width="150px" height="150px" className="sponsor-logo-mobile" style={{ marginTop: "-15px"}}/>
              </Link>
              <Link to="https://www.lut.fi/" target="_blank">
                <img src={lut} alt="LUT-yliopisto logo" width="250px" height="111px" className="sponsor-logo-mobile" style={{ marginTop: "-5px"}}/>
              </Link>
              <Link to="https://emblica.com/" target="_blank">
                <img src={emblica} alt="Emblica logo" width="300px" height="64px" className="sponsor-logo-mobile" style={{ marginTop: "30px"}}/>
              </Link>
              <Link to="https://www.facebook.com/CafeGbar/?locale=fi_FI" target="_blank">
                <img src={cafeGbar} alt="Cafe Bar G logo" width="225" height="92px" className="sponsor-logo-mobile" style={{ marginTop: "20px"}}/>
              </Link>
              <Link >
                <img src={viba} alt="Viba logo" width="150px" height="150px" className="sponsor-logo-mobile" style={{ marginTop: "-20px"}}/>
              </Link>
          </Slider>
        </Responsive>
      </div>
    );
  }

export default SponsorBar;