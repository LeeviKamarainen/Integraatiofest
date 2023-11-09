import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';

import upmKaukas from '../../assets/images/upm-kaukas-tehdas.jpeg';
import vismaOffice from '../../assets/sponsors/visma_logo_original.jpg';
import syncronTech from '../../assets/images/syncronTech.jpg'
import tujuTaproom from '../../assets/images/tuju_taproom.png'
import lprCity from '../../assets/images/lappeenranta.jpg';

import '../../assets/styles/Excut.css'


function Excursions() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image">
            <img src={upmKaukas} alt="UPM kaukas" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            <Typography variant="h4" className="excursion-title">
            UPM Kaukas
            </Typography>
            <Typography variant="body1" className="excursion-text">
            Visitors get to explore the utilization of data analytics and artificial intelligence in traditional process industries. 
            The visit includes a tour of South Karelia's largest factory integration with a bus ride across the area.
            Company website: <Link to="https://www.upm.com/en/" target="_blank">UPM</Link>
            <pre />
            <b>The excursion departs at 14:30 in front of LUT University.</b>
            </Typography>
          </Grid>
      </Grid>
        <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">
            <img src={vismaOffice} alt="Visma office" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            <Typography variant="h4" className="excursion-title">
                Visma Solutions
            </Typography>
            <Typography variant="body1" className="excursion-text">
                Visma Solutions is a part of the Visma Group, offering software and services to businesses and public sector organizations. Specializing in financial and personnel management software, along with related services, Visma Solutions develops applications that help companies streamline their operations and efficiently manage resources. 
                Company website: <Link to="https://vismasolutions.fi/yritys/" target="_blank">Visma</Link>
                <pre />
                Visma Solutions' office is located right in the heart of Lappeenranta, in the Assi Vapaudenaukio office building (address: Villimiehenkatu 10, Lappeenranta). The easiest way to get from LUT University to Visma's office is by using local transportation.
                The nearest bus stop is just a few hundred meters away from Visma's office. Below is a link to find the bus schedules. <br />
                <b>The excursion starts at 15:00 and lasts for about two hours. Make sure you are there on time!</b>
            </Typography>
            <Iframe
                url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Villimiehenkatu 10, Lappeenranta&lon2=28.195346&lat2=61.058131"
                width="96%"
                height="250px"
                className="bus-timetable"
                display="block"
                position='relative'
            />
        </Grid>
      </Grid>
      <Grid container className="excursion">
    <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">
        <img src={syncronTech} alt="UPM kaukas" className="grid-image" />
    </Grid>
    <Grid xs={12} md={8} backgroundColor="black">
        <Typography variant="h4" className="excursion-title">
            Syncron Tech
        </Typography>
        <Typography variant="body1" className="excursion-text">
            Syncron Tech develops and delivers software solutions for optimizing production in industrial and energy sector companies. Large amounts of data and their utilization are typical in the operating environments of Syncron Tech's client companies.
            Company website: <Link to="https://www.syncrontech.com/en/about-us" target="_blank">Syncron Tech</Link> <pre />
            <b>The excursion starts in LUT University's room 1314 at 15:00</b>
        </Typography>
    </Grid>
</Grid>
<Grid container className="excursion">
    <Grid xs={12} md={4} className="timetable-image" backgroundColor="black" border="4px solid white">
        <img src={tujuTaproom} alt="UPM kaukas" className="grid-image" />
    </Grid>
    <Grid xs={12} md={8} backgroundColor="black">
        <Typography variant="h4" className="excursion-title">
            Tuju Taproom Beer Tasting
        </Typography>
        <Typography variant="body1" className="excursion-text">
            Tuju Taproom is a restaurant opened in the summer of 2023 by Tuju Brewery, located on Rakuunamäki in Lappeenranta. The taproom has 16 taps, and in addition to that, it offers a changing and high-quality guest selection and refrigerators.
            You can check out Taproom's products at: <Link to="https://www.panimotuju.fi/taproom/" target="_blank">Tuju Taproom</Link> <pre />
            <b>The excursion starts at 14:50 in front of Tuju Taproom. The address is Soittokunnanraitti 3, Lappeenranta. Be on time, and remember that this excursion costs 30€/person. </b> <br />
            The easiest way to get to this excursion is by local transportation; below is a link to hunt down the schedule. <br />
        </Typography>
        <Iframe
            url="https://lappeenranta.digitransit.fi/haku?&lang=fi&address1=Lappeenrannan teknillinen yliopisto, (LUT), Yliopistonkatu 34, Lappeenranta&lon1=28.09156&lat1=61.064525&address2=Soittokunnanraitti 3, Lappeenranta&lon2=28.173316&lat2=61.059966"
            width="96%"
            height="250px"
            className="bus-timetable"
            display="block"
            position='relative'
        />
    </Grid>
  </Grid>
  <Grid container className="excursion">
    <Grid xs={12} md={4} className="timetable-image" backgroundColor="black">
        <img src={lprCity} alt="Lappeenranta city" className="grid-image" />
    </Grid>
    <Grid xs={12} md={8} backgroundColor="black" className="lpr-text">
        <Typography variant="h4" className="excursion-title">
            Lappeenranta City Tour
        </Typography>
        <Typography variant="body1" className="excursion-text">
            During the excursions, it's a good idea to explore the cultural and pub offerings in Lappeenranta. The map below includes various locations to explore in the beautiful downtown of our city.
            The bar section includes a list of local bars that (hopefully) welcome overalls-wearing enthusiasts on Friday afternoon. <pre />
            <b>Take over the city and go explore the mysterious downtown of Lappeenranta! ;) </b><br />
            <b>Link to the map: <Link to="https://www.google.com/maps/d/u/1/edit?mid=1BMMoVDAMG8mdiNEzBDsh2Ygk1Nl6Gf8&usp=sharing" target="_blank">Integraatiofest City Tour</Link> </b>
        </Typography>
        <br />
        <span className="photo-credits">Photo of Lappeenranta's landscape taken by <Link to="https://lut.pictures.fi/kuvat/LUT%20Press%20Images/Nature%20%26%20City/Lappeenranta%20City/lappeenranta-65.jpg" target="_blank">Teemu L.</Link></span>
    </Grid>
</Grid>
</Box>
)}

export default Excursions;
