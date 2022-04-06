import React from 'react';
import "./App.css";
import Takeaction from "./Components/TakeAction";
import Moreinfo from "./Components/MoreInfo";
import WebBody from "./Components/Body.js";
import Footer from "./Components/Footer";
import Media from "./Components/Media";
import Header from "./Components/Header";
import Grid from "@mui/material/Grid";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route,Switch}
from 'react-router-dom';
import SignUp from './Components/signup';


function Home() {
  return (
  <div className="App">
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <Grid item xs={12}>
        <Header></Header>
      </Grid>

      <Grid item xs={12} lg={4} md={6} sm={8}>
        <Moreinfo></Moreinfo>
      </Grid>

      <Grid item xs={12} md={6} sm={8} lg={4}>
        <WebBody></WebBody>
      </Grid>

      <Grid item xs={12} md={6} sm={8} lg={4}>
        <Takeaction></Takeaction>
        
      </Grid>
      <Grid item xs={12} md={8} sm={8} >
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


function App() {
  return (

   

    <Router>
    <Navbar />
    <Routes>
    <Route  path='/home' element={<Home />} />
    <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
    );

  
    
}

export default App;
