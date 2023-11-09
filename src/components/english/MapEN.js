import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Iframe from 'react-iframe';
import MediaQuery from "react-responsive";
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';

import map from '../../assets/images/map.jpg'
import '../../assets/styles/Map.css'

function Map() {

  return (
    <>
    <MediaQuery maxWidth={1019}>
      <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
        <Grid container className="map-wrapper" direction="column">
          <Grid xs={12} className="map-image-wrapper-mobile color-1" >
            <img src={map} fetchPriority="high" className="map-mobile" alt="map" />
          </Grid>
          <Grid xs={12} className="map-description-wrapper-mobile color-1">
            <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}, textAlign: "left"}} className="map-title-mobile color-1">
              Map legends <br />
            </Typography>
            <p className="color-1 description-text-mobile">
                <b style={{color: 'red'}}> LUT University & Viipuri hall (LUT-yliopsito) </b> <br />
                Yliopistonkatu 34, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Student House (Basement) </b> <br />
                Laserkatu 10, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Rakuunamäki </b> <br />
                Mannerheiminkatu 10, 53900 Lappeenranta <br />
                <b style={{color: 'red'}}> Accommodation (Lappeenrannan Lyseon lukio) </b> <br />
                Lönnrotinkatu 3, 53600 Lappeenranta <br />
                <b style={{color: 'red'}}> Las Palmas </b> <br />
                Valtakatu 33, 53100 Lappeenranta <br />
            </p>
            <p className="color-1 description-text-mobile">
              <b style={{color: '#1C39BB'}}>LUT University Bus Stop</b> <br />
              Located in front of LUT University's main entrance <br />
              <b style={{color: '#1C39BB'}}>City Center Bus Stop (Accommodation)</b> <br />
              Located on Valtakatu near the accommodation <br />
              <b style={{color: '#1C39BB'}}>City Center Bus Stop (Las Palmas)</b> <br />
              Located on Koulukatu near Kauppakeskus Armada <br />
            </p>
          </Grid>
        </Grid>
        <Grid container className="bus-timetable-wrapper color-1" direction="row" >
          <Grid xs={12} className="bus-timetable-wrapper">
            <Typography sx={{ typography: {xs: 'h6', sm: 'h4'}, textAlign: "left"}} className="map-title-mobile">
              Public Transportation in Lappeenranta
            </Typography>
            <p className="color-1 description-text-mobile">
              Local transportation in Lappeenranta between the city center and the university is served by bus lines
              <b> 1, 1X, 5</b> and <b>12</b>. <pre />

              Single tickets for local transportation can be purchased directly in the bus, and cash or bank cards are accepted as payment methods.
              In Lappeenranta, you can also buy local transportation tickets through the <b> PayiQ tickets</b> and <b> Matkahuollon Reitit ja liput</b> mobile applications. Mobile tickets are more affordable than purchasing a single ticket on the bus.
              It's advisable to add a payment method to mobile apps well in advance of your journey. <pre />

              <b>On weekends, and especially on Sundays, it's highly recommended to allocate extra time for local transportation!</b> <pre />

              <b>Last buses during weekend nights:</b> <br />
              University to City Center at 02:15 (bus line 12).  <br />
              City Center to University at 02:35 (bus line 12). <br /> <pre/>
              A shuttle bus for Integraatiofest participants runs from Saturday night to Sunday morning between 03:00 - 04:00 from LUT University to the City Center (accommodation). <pre />


              It's recommended to always check the current schedules from <Link to="https://lappeenranta.digitransit.fi/?locale=en" target='_blank' > Lappeenranta Public Transportation Route Planner.</Link> Below are pre-searched routes from LUT University to the City Center and back. <br />
            </p>

            <Typography variant='body1' className="map-title" sx={{textAlign: "center"}}> Route LUT University - Lyseo (City Center) </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Lyseo I, Lappeenranta&lon2=28.180633&lat2=61.057604"
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

              <Typography variant='body1' className="map-title" sx={{textAlign: "center"}}> Route Lyseo (City Center) - LUT University </Typography>
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
            <img src={map} fetchPriority="high" className="map" alt="map" />
          </Grid>
          <Grid md={6} className="map-description-wrapper color-1">
            <Typography variant="h4" className="map-title color-1">
              Map Legends <br />
            </Typography>
            <p className="color-1 description-text">
                <b style={{color: 'red'}}> LUT University & Viipuri Hall (LUT-yliopisto)</b> <br />
                Yliopistonkatu 34, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Student Union Building & Basement (Ylioppilastalo) </b> <br />
                Laserkatu 10, 53850 Lappeenranta <br />
                <b style={{color: 'red'}}> Rakuunamäki </b> <br />
                Mannerheiminkatu 10, 53900 Lappeenranta <br />
                <b style={{color: 'red'}}> Accommodation in Lappeenrannan Lyseo Upper Secondary School (Majoitus) </b> <br />
                Lönnrotinkatu 3, 53600 Lappeenranta <br />
                <b style={{color: 'red'}}> Las Palmas </b> <br />
                Valtakatu 33, 53100 Lappeenranta <br />
            </p>
            <p className="color-1 description-text">
              <b style={{color: '#1C39BB'}}>LUT University bus stop</b> <br />
              Located in front of LUT University's main entrance <br />
              <b style={{color: '#1C39BB'}}>City Center bus stop (Majoitus)</b> <br />
              Located on Valtakatu near the accommodation <br />
              <b style={{color: '#1C39BB'}}>City Center bus stop (Las Palmas)</b> <br />
              Located on Koulukatu near Kauppakeskus Armada <br />
            </p>
          </Grid>
        </Grid>
        <Grid container className="bus-timetable-wrapper color-1" direction="row" >
          <Grid md={6} className="bus-timetable-text-wrapper">
            <Typography variant='h4' className="map-title" sx={{textAlign: "left"}}> Public Transportation in Lappeenranta </Typography>
            <p className="color-1 description-text">
              Local transportation in Lappeenranta between the city center and the university is served by bus lines
              <b> 1, 1X </b> and <b> 5</b>, and during weekends, there's bus line <b> 12</b>. <pre />

              Single tickets for local transportation can be purchased directly on the bus, and cash or bank cards are accepted as payment methods.
              In Lappeenranta, you can also buy local transportation tickets through the <b> PayiQ tickets</b> and <b> Matkahuollon Reitit ja liput</b> mobile applications. Mobile tickets are more affordable than purchasing a single ticket on the bus.
              It's advisable to add a payment method to mobile apps well in advance of your journey. <pre />

              <b>Last buses during weekend nights:</b> <br />
              University to City Center at 02:15 (bus line 12).  <br />
              City Center to University at 02:35 (bus line 12). <br /> <pre/>

              It's recommended to always check the current schedules from <Link to="https://lappeenranta.digitransit.fi/" target='_blank' > Lappeenranta Public Transportation Route Planner.</Link> On the right, there are pre-searched routes from LUT University to the City Center and back. <br />
            </p>
          </Grid>
          <Grid md={6} className="bus-timetable-search-wrapper">
            <Typography variant='h5' className="map-title" sx={{textAlign: "center"}}> Route LUT University - Lyseo (City Center) </Typography>
              <Iframe 
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Lyseo I, Lappeenranta&lon2=28.180633&lat2=61.057604"
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position="relative"
              />

              <Typography variant='h5' className="map-title" sx={{textAlign: "center"}}> Route Lyseo (City Center) - LUT University </Typography>
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
  )
}

export default Map;