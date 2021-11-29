import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/NavBar/Navbar';
import React, { useEffect, useState } from 'react';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contacts from './Components/Contacts/Contacts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ClipLoader from "react-spinners/ClipLoader";
import { PacmanLoader } from 'react-spinners';
import Home from './Components/Home/Home';

AOS.init();

function App() {

  

  return (
    <BrowserRouter>
     
      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
