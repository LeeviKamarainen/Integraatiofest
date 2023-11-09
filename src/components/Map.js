import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Iframe from 'react-iframe';
import MediaQuery from "react-responsive";
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';

import map from '../assets/images/map.jpg'
import '../assets/styles/Map.css'

function Map() {

  return (
    <>
    <MediaQuery maxWidth={1019}>
      <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
        <Grid container className="map-wrapper" direction="column">
          <Grid xs={12} className="map-image-wrapper-mobile color-1" >
            <img src={map} fetchPriority="high" className="map-mobile" alt="kartta" />
          </Grid>
          <Grid xs={12} className="map-description-wrapper-mobile color-1">
            <Typography sx={{ typography: {xs: 'h6', sm: 'h4'} ,textAlign: "left"}} className="map-title-mobile color-1">
              Kartan selitteet <br />
            </Typography>
            <p className="color-1 description-text-mobile">
                <b style={{color: 'red'}}> LUT-yliopisto (Viipuri-sali) </b> <br />
                Yliopistonkatu 34, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Ylioppilastalo (kellari) </b> <br />
                Laserkatu 10, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Rakuunamäki </b> <br />
                Mannerheiminkatu 10, 53900 Lappeenranta <br />
                <b style={{color: 'red'}}> Majoitus (Lappeenrannan Lyseon lukio) </b> <br />
                Lönnrotinkatu 3, 53600 Lappeenranta <br />
                <b style={{color: 'red'}}> Las Palmas </b> <br />
                Valtakatu 33, 53100 Lappeenranta <br />
            </p>
            <p className="color-1 description-text-mobile">
              <b style={{color: '#1C39BB'}}>LUT-yliopiston pysäkki</b> <br />
              Sijaitsee LUTin pääovien edessä <br />
              <b style={{color: '#1C39BB'}}>Keskustan pysäkki (Majoitus)</b> <br />
              Sijaitsee Valtakadulla majoituksen vieressä <br />
              <b style={{color: '#1C39BB'}}>Keskustan pysäkki (Las Palmas)</b> <br />
              Sijaitsee Koulukadulla kauppakeskus Armadan vieressä <br />
            </p>
          </Grid>
        </Grid>
        <Grid container className="bus-timetable-wrapper color-1" direction="row" >
          <Grid xs={12} className="bus-timetable-wrapper">
            <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}, textAlign: "left"}} className="map-title-mobile">
              Julkinen liikenne Lappeenrannassa 
            </Typography>
            <p className="color-1 description-text-mobile">
              Lappeenrannan paikallisliikenne keskustan ja yliopiston välillä ajetaan linjoilla
              <b> 1, 1X </b> ja <b> 5</b>, sekä viikonloppuöisin linja <b> 12</b>. <pre />

              Paikallisliikenteen kertalippuja voi ostaa suoraan bussista, jossa maksutapana käy käteinen tai pankkikortti.
              Lappeenrannassa paikallisliikenteen lipun voi ostaa myös <b> PayiQ tickets</b> ja <b> Matkahuollon Reitit ja liput</b> -sovellusten kautta. Mobiililippu on bussista ostettua kertalippua edullisempi. 
              Mobiilisovelluksiin kannattaa lisätä maksutapa jo hyvissä ajoin ennen matkaa. <pre />

              <b>Viikonloppuisin ja erityisesti sunnuntaisin paikallisliikenteellä liikkumiseen kannattaa varata aikaa!</b> <pre />

              <b >Viimeiset bussit viikonloppuöisin: </b> <br />
              Yliopisto-Keskusta klo 02:15 (linja 12).  <br />
              Keskusta-Yliopisto klo 02:35 (linja 12). <br /> <pre/>
              Festikansalle kulkee non-stop shuttlebussi la - su yönä klo 03:00 - 04:00 välillä LUT-yliopisto - Keskusta (majoitus) <pre />

              Ajankohtaiset aikataulut kannattaa aina tarkistaa <Link to="https://lappeenranta.digitransit.fi/" target='_blank' > Lappeenrannan joukkoliikenteen reittioppaasta.</Link> Alapuolella valmiiksi haetut reitit LUT-yliopistolta Keskustaan ja takaisin. <br />
           </p>

            <Typography variant='body1' className="map-title" sx={{textAlign: "center"}}> Reitti LUT-yliopisto - Lyseo (keskusta) </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Lyseo I, Lappeenranta&lon2=28.180633&lat2=61.057604"
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

              <Typography variant='body1' className="map-title" sx={{textAlign: "center"}}> Reitti Lyseo (keskusta) - LUT-yliopisto </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lyseo L, Lappeenranta&lon1=28.180236&lat1=61.057718&address2=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon2=28.09156&lat2=61.064525" 
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

          </Grid>
        </Grid>
      </Box>
    </MediaQuery>

    <MediaQuery minWidth={1020}>
      <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
        <Grid container className="map-wrapper" >
          <Grid md={6} className="map-image-wrapper" >
            <img src={map} fetchPriority="high" className="map" alt="kartta" />
          </Grid>
          <Grid md={6} className="map-description-wrapper color-1">
            <Typography variant="h4" className="map-title color-1">
              Kartan selitteet <br />
            </Typography>
            <p className="color-1 description-text">
                <b style={{color: 'red'}}> LUT-yliopisto (Viipuri-sali)</b> <br />
                Yliopistonkatu 34, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Ylioppilastalo (kellari) </b> <br />
                Laserkatu 10, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Rakuunamäki </b> <br />
                Mannerheiminkatu 10, 53900 Lappeenranta <br />
                <b style={{color: 'red'}}> Majoitus (Lappeenrannan Lyseon lukio) </b> <br />
                Lönnrotinkatu 3, 53600 Lappeenranta <br />
                <b style={{color: 'red'}}> Las Palmas </b> <br />
                Valtakatu 33, 53100 Lappeenranta <br />
            </p>
            <p className="color-1 description-text">
              <b style={{color: '#1C39BB'}}>LUT-yliopiston pysäkki</b> <br />
              Sijaitsee LUTin pääovien edessä <br />
              <b style={{color: '#1C39BB'}}>Keskustan pysäkki (Majoitus)</b> <br />
              Sijaitsee Valtakadulla majoituksen vieressä <br />
              <b style={{color: '#1C39BB'}}>Keskustan pysäkki (Las Palmas)</b> <br />
              Sijaitsee Koulukadulla kauppakeskus Armadan vieressä <br />
            </p>
          </Grid>
        </Grid>
        <Grid container className="bus-timetable-wrapper color-1" direction="row" >
          <Grid md={6} className="bus-timetable-text-wrapper">
            <Typography variant='h4' className="map-title" sx={{textAlign: "left"}}> Julkinen liikenne Lappeenrannassa </Typography>
            <p className="color-1 description-text">
              Lappeenrannan paikallisliikenne keskustan ja yliopiston välillä ajetaan linjoilla
              <b> 1, 1X </b> ja <b> 5</b>, sekä viikonloppuöisin linja <b> 12</b>. <pre />

              Paikallisliikenteen kertalippuja voi ostaa suoraan bussista, jossa maksutapana käy käteinen tai pankkikortti.
              Lappeenrannassa paikallisliikenteen lipun voi ostaa myös <b> PayiQ tickets</b> ja <b> Matkahuollon Reitit ja liput</b> -sovellusten kautta. Mobiililippu on bussista ostettua kertalippua edullisempi. 
              Mobiilisovelluksiin kannattaa lisätä maksutapa jo hyvissä ajoin ennen matkaa. <pre />

              <b>Viikonloppuisin ja erityisesti sunnuntaisin paikallisliikenteellä liikkumiseen kannattaa varata aikaa!</b> <pre />

              <b >Viimeiset bussit viikonloppuöisin: </b> <br />
              Yliopisto-Keskusta klo 02:15 (linja 12).  <br />
              Keskusta-Yliopisto klo 02:35 (linja 12). <br /> <pre/>
              Festikansalle kulkee non-stop shuttlebussi la - su yönä klo 03:00 - 04:00 välillä LUT-yliopisto - Keskusta (majoitus) <pre />

              Ajankohtaiset aikataulut kannattaa aina tarkistaa <Link to="https://lappeenranta.digitransit.fi/" target='_blank' > Lappeenrannan joukkoliikenteen reittioppaasta.</Link> Oikealla valmiiksi haetut reitit LUT-yliopistolta Keskustaan ja takaisin. <br />
            </p>
          </Grid>
          <Grid md={6} className="bus-timetable-search-wrapper">
            <Typography variant='h5' className="map-title" sx={{textAlign: "center"}}> Reitti LUT-yliopisto - Lyseo (keskusta) </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Lyseo I, Lappeenranta&lon2=28.180633&lat2=61.057604"
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

              <Typography variant='h5' className="map-title" sx={{textAlign: "center"}}> Reitti Lyseo (keskusta) - LUT-yliopisto </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lyseo L, Lappeenranta&lon1=28.180236&lat1=61.057718&address2=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon2=28.09156&lat2=61.064525" 
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

          </Grid>
        </Grid>
        </Box>
      </MediaQuery>
    </>
)}

export default Map;