// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Services from './Services';
import './styles.css';
import AboutUs from './AboutUs'
import Biography from './Biography';
import ContactUs from './ContactUs'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Services" element={<Services />} /> 
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/biography" element={<Biography />} /> 
        <Route path="/biography/:id" element={<Biography />} />
        <Route path="/ContactUs" element={<ContactUs/>} /> 
      </Routes>

    </Router>
  );
}

export default App;
