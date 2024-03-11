import React, { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Slider from './components/Slider';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import HomeDiv from './components/HomeDiv';



function App() {

  return (
    <>
     <NavBar/> 
     <Slider/>
    <HomeDiv/>
    <Footer/>
    </>
   
  );
}

export default App

