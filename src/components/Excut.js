import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';

import upmKaukas from '../assets/images/upm-kaukas-tehdas.jpeg';
import vismaOffice from '../assets/sponsors/visma_logo_original.jpg';
import syncronTech from '../assets/images/syncronTech.jpg'
import tujuTaproom from '../assets/images/tuju_taproom.png'
import lprCity from '../assets/images/lappeenranta.jpg';

import '../assets/styles/Excut.css'


function Excut() {

  return (
    <Box sx={{ flexGrow: 1 }} className="content-wrapper" >
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">
            <img src={upmKaukas} alt="UPM kaukas" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            <Typography variant="h4" className="excursion-title">
            UPM Kaukas
            </Typography>
            <Typography variant="body1" className="excursion-text">
            Vierailijat pääsevät tutustumaan data-analytiikan ja tekoälyn hyödyntämiseen perinteisessä prosessiteollisuudessa. 
            Lisäksi ekskursion aikana on mahdollisuus kokea Etelä-Karjalan suurin tehdasintegraatti alueen halki suuntautuvalla bussiajelulla. 
            Yrityksen verkkosivut: <Link to="https://www.upm.com/fi/" target="_blank">UPM</Link>
            <pre />
            <b>Kuljetus exculle lähtee klo 14:30 LUT-yliopiston edestä.</b>
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
            Visma Solutions on osa Visma-konsernia, joka tarjoaa ohjelmistoja ja palveluita yrityksille ja julkisen sektorin organisaatioille. 
            Visma Solutions on erikoistunut taloushallinnon ja henkilöstöhallinnon ohjelmistoihin sekä niihin liittyviin palveluihin. 
            Lopputuloksena on erityisesti sovelluksia jotka auttavat yrityksiä tehostamaan liiketoimintaansa ja hallitsemaan resurssejaan tehokkaasti. 
            Yrityksen verkkosivut: <Link to="https://vismasolutions.fi/yritys/" target="_blank">Visma</Link>
            <pre />
            Visma Solutionsin toimisto sijaitsee aivan Lappeenrannan keskustassa, Assi Vapaudenaukion toimistotalossa (osoite: Villimiehenkatu 10, Lappeenranta). 
            Kulkeminen LUT-yliopistolta Visman toimistolle onnistuu helpoiten paikallisliikennettä hyödyntäen.
            Lähin pysäkki sijaitsee vain muutaman sadan metrin kävelymatkan päästä Visman toimistolta. Alapuolella linkki aikataulujen hakemiseen. <br /> <pre />
            <b>Excu alkaa klo 15:00 ja kestää noin pari tuntia. Varmistakaa, että olette ajoissa paikalla!</b>
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
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="white">
            <img src={syncronTech} alt="UPM kaukas" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            <Typography variant="h4" className="excursion-title">
            Syncron Tech
            </Typography>
            <Typography variant="body1" className="excursion-text">
            Syncron Tech kehittää ja toimittaa ohjelmistoratkaisuja tuotannon tehostamiseksi teollisuuden ja energiasektorin yrityksille. 
            Suuret tietomäärät sekä niiden hyödyntäminen ovat tyypillisiä Syncron Techin asiakasyritysten toimintaympäristöissä. 
            Yrityksen verkkosivut: <Link to="https://www.syncrontech.com/en/about-us" target="_blank">Syncron Tech</Link> <pre />
            <b>Excu alkaa LUT-yliopiston salissa 1314 klo 15:00</b>
            </Typography>
          </Grid>
      </Grid>
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="black" border="4px solid white">
            <img src={tujuTaproom} alt="UPM kaukas" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black">
            <Typography variant="h4" className="excursion-title">
            Tuju Taproom Olutmaistelu
            </Typography>
            <Typography variant="body1" className="excursion-text">
            Tuju Taproom on panimoyhtiö Tujun kesällä 2023 avattu ravintola, joka sijaitsee lappeen Rantojen Rakuunamäellä. 
            Hanoja Taproomissa on 16 kappaletta, jonka lisäksi janoista palvelee vaihtuva ja laadukas vierasvalikoima ja kylmäkaapit.
            Taproomin tuotteita voi käydä ihastelemasta osoitteesta: <Link to="https://www.panimotuju.fi/taproom/" target="_blank">Tuju Taproom</Link> <pre />
            <b>Excu alkaa klo 14:50 Tuju Taproomin edessä. Osoite on Soittokunnanraitti 3, Lappeenranta. Olethan ajoissa paikalla ja
                muistathan, että kyseinen excu maksaa 30€/henkilö. </b> <br />
            Tähänkin excuun helpoin siirtymistapa on paikallisliikenne, alla linkki aikataulun metsästämiseen. <br />
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
      <Grid container className="excursion" >
          <Grid xs={12} md={4} className="timetable-image" backgroundColor="black">
            <img src={lprCity} alt="Lappeenranta city" className="grid-image" />
          </Grid>
          <Grid xs={12} md={8} backgroundColor="black" className="lpr-text">
            <Typography variant="h4" className="excursion-title">
            Lappeenrannan kaupunkikierros
            </Typography>
            <Typography variant="body1" className="excursion-text">
              Excuilla ei kannata jättää väliin lappeen Rantojen kulttuurista sykettä ja ainutlaatuista kuppilatarjontaa! <br />
              Alla linkattu karttamme ohjaa sinut erilaisiin tutustumisen arvoisiin kohteisiin kaupunkimme keskustassa.
              Kartan Kuppilat-osioon on kerätty lista paikallisista baareista, joissa (toivottavasti) on mahdollista viettää perjantai-iltapäivää myös haalarit jalassa. <pre />
            <b>Ota kaupunki haltuun ja lähde tutustumaan lappeen Rantojen mysteeriseen keskustaan! ;) </b><br />
            <b>Linkki karttaan: <Link to="https://www.google.com/maps/d/u/1/edit?mid=1BMMoVDAMG8mdiNEzBDsh2Ygk1Nl6Gf8&usp=sharing" target="_blank">Integraatiofest kaupunkikierros</Link> </b>
            </Typography>
            <br />
            <span className="photo-credits">Lappeenrannan maisemakuvan ottanut <Link to="https://lut.pictures.fi/kuvat/LUT%20Press%20Images/Nature%20%26%20City/Lappeenranta%20City/lappeenranta-65.jpg" target="_blank">Teemu L.</Link></span>
          </Grid>
      </Grid>
    </Box>
)}

export default Excut;