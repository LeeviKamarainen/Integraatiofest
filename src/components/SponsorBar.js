import React from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import MediaQuery from "react-responsive";
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
import loas from '../assets/sponsors/LOAS-logo-vihr.png'

function SponsorBar() {

  const sponsors = [
    { name: "TEK", link: "https://www.tek.fi/", image: tek, width: 143, height: 80, marginTop: { xs: 0 } },
    { name: "Lappeenranta Events", link: "https://lappeenrantaevents.fi/", image: lprVertical, width: { xs: 178 }, height: { xs: 45 }, marginTop: { xs: 2 } },
    { name: "Kotipizza", link: "https://kotipizza.fi/", image: kotipizza, width: { xs: 86 }, height: { xs: 60 }, marginTop: { xs: "0.3rem" } },
    { name: "Visma", link: "https://www.visma.fi/", image: visma, width: { xs: 167 }, height: { xs: 60 }, marginTop: { xs: 0.5 } },
    { name: "Syncron Tech", link: "https://www.syncrontech.com/", image: syncronTech, width: { xs: 104 }, height: { xs: 70 }, marginTop: { xs: 0 } },
    { name: "Loimu", link: "https://www.loimu.fi/", image: loimu, width: { xs: 163 }, height: { xs: 60 }, marginTop: { xs: 0 } },
    { name: "Danfoss", link: "https://www.danfoss.com/fi-fi/", image: danfoss, width: { xs: 146 }, height: { xs: 60 }, marginTop: { xs: "0.3rem" } },
    { name: "Las Palmas", link: "https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta", image: lasPalmas, width: { xs: 100 }, height: { xs: 70 }, marginTop: { xs: 0 } },
    { name: "UPM", link: "https://www.upm.com/fi/", image: upm, width: { xs: 90 }, height: { xs: 90 }, marginTop: { xs: "-0.8rem" } },
    { name: "LUT-yliopisto", link: "https://www.lut.fi/", image: lut, width: { xs: 179 }, height: { xs: 80 }, marginTop: { xs: -1 } },
    { name: "Emblica", link: "https://emblica.com/", image: emblica, width: { xs: 150 }, height: { xs: 32 }, margin: { xs: "1.4rem" } },
    { name: "Viba", image: viba, width: { xs: 100 }, height: { xs: 100 }, marginTop: { xs: "-0.8rem" }, marginBottom: { xs: "-1rem" }},
    { name: "Cafe Bar G", link: "https://www.facebook.com/CafeGbar/?locale=fi_FI", image: cafeGbar, width: { xs: 179 }, height: { xs: 73 }, marginTop: { xs: "0rem" } },
    { name: "LOAS", link:"https://www.loas.fi/", image: loas, width: { xs: 146 }, height: { xs: 40 }, marginTop: { xs: "0.8rem" }}
  ];
  
  const sponsors_mobile = [
  { name: "TEK", link: "https://www.tek.fi/", image: tek, width: 179, height: 100, style: { marginTop: "0px" } },
  { name: "Lappeenranta Events", link: "https://lappeenrantaevents.fi/", image: lprVertical, width: 197, height: 50, style: { marginTop: "20px" } },
  { name: "Kotipizza", link: "https://kotipizza.fi/", image: kotipizza, width: 114, height: 80, style: { marginTop: "0px" }},
  { name: "Visma", link: "https://www.visma.fi/", image: visma, width: 223, height: 80, style: { marginTop: "0px" }},
  { name: "Syncron Tech", link: "https://www.syncrontech.com/", image: syncronTech, width: 103, height: 70, style: { marginTop: "10px" } },
  { name: "Loimu", link: "https://www.loimu.fi/", image: loimu, width: 219, height: 81, style: { marginTop: "0px" } },
  { name: "Danfoss", link: "https://www.danfoss.com/fi-fi/", image: danfoss, width: 171, height: 71, style: { marginTop: "10px" } },
  { name: "Las Palmas", link: "https://www.raflaamo.fi/fi/ravintola/lappeenranta/las-palmas-lappeenranta", image: lasPalmas, width: 114, height: 80, style: { marginTop: "10px" } },
  { name: "UPM", link: "https://www.upm.com/fi/", image: upm, width: 90, height: 90, style: { marginTop: "0px" } },
  { name: "LUT-yliopisto", link: "https://www.lut.fi/", image: lut, width: 180, height: 80, style: { marginTop: "5px" } },
  { name: "Emblica", link: "https://emblica.com/", image: emblica, width: 213, height: 45, style: { marginTop: "25px" } },
  { name: "Viba", image: viba, width: 100, height: 100 },
  { name: "Cafe Bar G", link: "https://www.facebook.com/CafeGbar/?locale=fi_FI", image: cafeGbar, width: 179, height: 73, style: { marginTop: "15px" } },
  { name: "LOAS", link: "https://www.loas.fi/", image: loas, width: 146, height: 40, style: { marginTop: "25px" }}
  ];

  const randomNumber = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min) + min);
    return rand
  }

  const settings = {
    className: "slider",
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    initialSlide: randomNumber(0, sponsors.length),
    variableWidth: true,
  };

  const settings_mobile = {
    className: "slider",
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
    initialSlide: randomNumber(0, sponsors_mobile.length)
  };
  console.log(sponsors)

  return (
    <div className="content-wrapper sponsor-bar">
      <MediaQuery minWidth={601}>
        <Typography variant='h6' className="sponsor-title" sx={{
          marginBlockEnd: {
            lg: 0,
            xl: '0.2rem'
          }
        }}>Festejä mahdollistamassa</Typography>
        <Slider {...settings} >
          {sponsors_mobile.map((sponsor, index) => (
            <Link to={sponsor.link} target="_blank" className="sponsor-link" key={index}>
              <Box
                sx={{
                  width: sponsor.width,
                  height: sponsor.height,
                  marginTop: sponsor.marginTop,
                  marginBottom: sponsor.marginBottom,
                  marginLeft: sponsor.marginLeft,
                  marginRight: sponsor.marginRight,
                  margin: sponsor.margin,
                }}
                >
                <img src={sponsor.image} alt={sponsor.name} className="sponsor-logo" />
              </Box>
            </Link>
          ))}
        </Slider>
      </MediaQuery>

      <MediaQuery maxWidth={600}>
        <Typography variant='h6' className="sponsor-title" >Festejä mahdollistamassa</Typography>
        <Slider {...settings_mobile} >
          {sponsors_mobile.map((sponsor, index) => (
            <Link to={sponsor.link} target="_blank" key={index}>
              <img src={sponsor.image} alt={sponsor.name} width={sponsor.width} height={sponsor.height} style={sponsor.style} className="sponsor-logo-mobile" />
            </Link>
          ))
          }
        </Slider>
      </MediaQuery>
    </div>
  );
}

export default SponsorBar;