import './App.css';
import Takeaction from './Components/TakeAction';
import Moreinfo from './Components/MoreInfo';
import WebBody from './Components/Body.js';
import Footer from './Components/Footer';
import Media from'./Components/Media';
import Header from './Components/Header';
import Grid from '@mui/material/Grid';


function App() {
  
  return (
    <div className="App">

    <Grid  container spacing={1} direction='row' justifyContent='space-evenly' alignItems='center'>  
      <Grid item xs={12}> 
      <Header></Header>
      </Grid>
      
      <Grid item xs={6} lg={4} md={4}>
        <Moreinfo></Moreinfo>
      </Grid>

      <Grid item xs={6} md={4}>
        <WebBody></WebBody>
      
      </Grid>
      
      <Grid item xs={12} md={4}>
          
          <Takeaction></Takeaction>  
        
      </Grid> 
      <Grid item xs={9}>
        <Media></Media>
      </Grid>

      <Grid item xs={7}>
        <Footer></Footer>
      </Grid>

      </Grid>

<p></p>


    </div>
  );
}

export default App;
