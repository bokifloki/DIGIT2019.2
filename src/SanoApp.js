import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router"
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage'
import Events from './components/Events/Events'
import Donations from './components/Donations/Donations'
import AboutUs from './components/AboutUs/AboutUs'
import ContactUs from './components/ContactUs/ContactUs'


const PageNotFound = () => "Page doesnt exist";
const SanoApp = () => {
  return (
    <>
      <Header />

      <Router>
        <Homepage path='/' />
        <AboutUs path="about-us" />
        <Events path="events" />
        <Donations path="donate" />  
        <PageNotFound default />
      </Router>
    </>
  );
};

export default SanoApp;
