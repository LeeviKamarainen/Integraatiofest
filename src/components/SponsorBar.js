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
      arrows: true,
      infinite: true,
      autoplay: false,
      slidesToScroll: 1,
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
      autoplaySpeed: 1800,
      pauseOnHover: false,
      initialSlide: randomNumber(0, 10)
    };

    return (
      <div className="content-wrapper sponsor-bar">
        <Responsive displayIn={[IdResponsiveRenderOnlyIn.Tablet, IdResponsiveRenderOnlyIn.Laptop]}>
          <Typography variant='h6' className="sponsor-title" sx={{
            marginBlockEnd: {
              lg: 0,
              xl: '1rem'
            }
          }}>Festejä mahdollistamassa</Typography>
          <Slider {...settings} >
              <Link to="https://www.tek.fi/" target="_blank" classname="sponsor-link" >
                  <Box
                      sx={{
                        height: {
                          sm: 50,
                          md: 80,
                          // xl: 100
                        },
                        width: {
                          sm: 107,
                          md: 143,
                          // xl: 179
                        },
                        }}>
                    <img src={tek} alt="TEK logo" className="sponsor-logo"/>
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
                          sm: 60,
                          md: 45,
                          // xl: 76
                        },
                        width: {
                          sm: 237,
                          md: 178,
                          // xl: 300
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
                          sm: 50,
                          md: 60,
                          // xl: 100
                        },
                        width: {
                          sm: 86,
                          md: 86,
                          // xl: 143
                        },
                        backgroundColor: 'white',
                        marginTop: "0.3rem"
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
                          sm: 50,
                          md: 60,
                          // xl: 100
                        },
                        width: {
                          sm: 167,
                          md: 167,
                          // xl: 279
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
                          sm: 50,
                          md: 60,
                          // xl: 100
                        },
                        width: {
                          sm: 89,
                          md: 89,
                          // xl: 148
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
                          sm: 50,
                          md: 60,
                          // xl: 92
                        },
                        width: {
                          sm: 163,
                          md: 163,
                          // xl: 250
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
                          sm: 50,
                          md: 60,
                          // xl: 100
                        },
                        width: {
                          sm: 146,
                          md: 146,
                          // xl: 243
                        },
                        backgroundColor: 'white',
                        marginTop: "0.3rem"
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
                          sm: 50,
                          md: 70,
                          // xl: 100
                        },
                        width: {
                          sm: 86,
                          md: 100,
                          // xl: 142
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
                          sm: 60,
                          md: 100,
                          // xl: 100
                        },
                        width: {
                          sm: 60,
                          md: 100,
                          // xl: 100
                        },
                        backgroundColor: 'white',
                        marginTop: "-0.8rem",
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
                          sm: 50,
                          md: 80,
                          // xl: 89
                        },
                        width: {
                          sm: 135,
                          md: 179,
                          // xl: 200
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
                          md: 32,
                          // lg: 43,
                        },
                        width: {
                          md: 150,
                          // lg: 200,
                        },
                        backgroundColor: 'white',
                        margin: '1.4rem'
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
                          sm: 60,
                          md: 100,
                          // xl: 100
                        },
                        width: {
                          sm: 60,
                          md: 100,
                          // xl: 100
                        },
                        backgroundColor: 'white',
                        marginTop: "-0.7rem",
                        marginBottom: "-1rem"
                      }}
                      alt="Viba"
                      src={viba}
                  />
                </Link>
          </Slider>
        </Responsive>

        <Responsive displayIn={IdResponsiveRenderOnlyIn.Mobile}>
          <Typography variant='h6' className="sponsor-title" >Festejä mahdollistamassa</Typography>
          <Slider {...settings2} >
              <Link to="https://www.tek.fi/" target="_blank" >
                <img src={tek} alt="TEK logo" width="179px" height="100px" className="sponsor-logo-mobile" style={{ marginTop: "0px"}}/>
              </Link>
              <Link to="https://lappeenrantaevents.fi/" target="_blank">
                <img src={lprVertical} alt="Lappeenranta Event logo" width="197px" height="50px" className="sponsor-logo-mobile" style={{ marginTop: "20px"}}/>
              </Link>
              <Link to="https://kotipizza.fi/" target="_blank">
                <img src={kotipizza} alt="Kotipizza logo" width="114px" height="80px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.visma.fi/" target="_blank">
                <img src={visma} alt="Visma logo" width="223px" height="80px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.syncrontech.com/" target="_blank">
                <img src={syncronTech} alt="Syncron Tech logo" width="103px" height="70px" className="sponsor-logo-mobile" style={{ marginTop: "10px"}}/>
              </Link>
              <Link to="https://www.loimu.fi/" target="_blank">
                <img src={loimu} alt="Loimu logo" width="219px" height="81px" className="sponsor-logo-mobile"/>
              </Link>
              <Link to="https://www.danfoss.com/fi-fi/" target="_blank">
                <img src={danfoss} alt="Danfoss logo" width="171px" height="71px" className="sponsor-logo-mobile" style={{ marginTop: "10px"}}/>
              </Link>
              <Link to="https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta" target="_blank">
                <img src={lasPalmas} alt="Las Palmas logo" width="114px" height="80px" className="sponsor-logo-mobile" style={{ marginTop: "10px"}}/>
              </Link>
              <Link to="https://www.upm.com/fi/" target="_blank">
                <img src={upm} alt="UPM logo" width="90px" height="90px" className="sponsor-logo-mobile" style={{ marginTop: "0px"}}/>
              </Link>
              <Link to="https://www.lut.fi/" target="_blank">
                <img src={lut} alt="LUT-yliopisto logo" width="180px" height="80px" className="sponsor-logo-mobile" style={{ marginTop: "5px"}}/>
              </Link>
              <Link to="https://emblica.com/" target="_blank">
                <img src={emblica} alt="Emblica logo" width="213px" height="45px" className="sponsor-logo-mobile" style={{ marginTop: "25px"}}/>
              </Link>
              <Link to="https://www.facebook.com/CafeGbar/?locale=fi_FI" target="_blank">
                <img src={cafeGbar} alt="Cafe Bar G logo" width="179px" height="73px" className="sponsor-logo-mobile" style={{ marginTop: "15px"}}/>
              </Link>
              <Link >
                <img src={viba} alt="Viba logo" width="100px" height="100px" className="sponsor-logo-mobile" style={{ marginTop: "0px"}}/>
              </Link>
          </Slider>
        </Responsive>
      </div>
    );
  }

export default SponsorBar;