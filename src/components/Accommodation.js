import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import MediaQuery from "react-responsive";


import lyseo1 from '../assets/images/lyseo_img1.jpg';
import lyseo2 from '../assets/images/lyseo_img2.jpg'
import '../assets/styles/Accommodation.css';


function Accommodation() {

  return (
    <>
      <MediaQuery minWidth={1020}>
        <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
          <Grid container className="grid" direction="row">
            <Grid md={6} className="grid-image">
              <img src={lyseo2} alt="Lyseo frontdoor" className="grid-image img1" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Etuovi majoitukseen
              </Typography>
            </Grid>
            <Grid md={6} >
              <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}}} className="accommodation-title">
                Majoitus Lappeenrannan Lyseon Lukion tiloissa
              </Typography>
              <Typography variant="body1" className="accommodation-secondary">
                Majoituksen osoite on: Lönnrotinkatu 3, 53600 Lappeenranta
              </Typography>
              <br />
              <Typography variant="body1" className="accommodation-text">
                <b>Majoituksessa alkoholin nauttiminen, juominen ja muu vastaava kuluttaminen on ehdottomasti kielletty!</b> <br /> <br />
                Majoitus on päivisin avoinna vain aikataulussa erikseen ilmoitettuina aikoina.
                Yöaikaan klo 23:00 - 08:00 majoituksen ovet ovat kiinni ja yöpäivystäjät avaavat ovet festikansalle majoitukseen saavuttaessa. 
                Majoituksessa on suihkumahdollisuus molempina aamuina klo 08:00 - 10:30. Suihkut sijaitsevat liikuntasalin kanssa samassa rakennuksessa.
              </Typography>
            </Grid>
            <Grid md={6} className="grid-image">
              <img src={lyseo1} alt="Sports hall frontdoor" className="grid-image img2" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Etuovi liikuntahalliin (suihkuun)
              </Typography>
            </Grid>
            <Grid md={6} >
            </Grid>
          </Grid>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={1019}>
        <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
          <Grid container className="grid" direction="row">
            <Grid xs={12} sx={{paddingBottom: "1rem"}}>
                <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}}} className="accommodation-title">
                  Majoitus Lappeenrannan Lyseon Lukion tiloissa
                </Typography>
                <Typography variant="body1" className="accommodation-secondary">
                  Majoituksen osoite on: Lönnrotinkatu 3, 53600 Lappeenranta
                </Typography>
                <br />
                <Typography variant="body1" className="accommodation-text">
                  <b>Majoituksessa alkoholin nauttiminen, juominen ja muu vastaava kuluttaminen on ehdottomasti kielletty!</b> <br /> <br />
                  Majoitus on päivisin avoinna vain aikataulussa erikseen ilmoitettuina aikoina.
                  Yöaikaan klo 23:00 - 08:00 majoituksen ovet ovat kiinni ja yöpäivystäjät avaavat ovet festikansalle majoitukseen saavuttaessa. 
                  Majoituksessa on suihkumahdollisuus molempina aamuina klo 08:00 - 10:30. Suihkut sijaitsevat liikuntasalin kanssa samassa rakennuksessa.
                </Typography>
              </Grid>
            <Grid xs={12} className="grid-image">
              <img src={lyseo2} alt="Lyseo frontdoor" className="grid-image img1" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Etuovi majoitukseen
              </Typography>
            </Grid>
            <Grid xs={12} className="grid-image">
              <img src={lyseo1} alt="Sports hall frontdoor" className="grid-image img2" />
              <Typography variant="body2" sx={{alignSelf: "center"}}  className="accommodation-desc">
                Etuovi liikuntahalliin (suihkuun)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </MediaQuery> 
    </>
)}

export default Accommodation;