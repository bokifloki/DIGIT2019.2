import React from "react";
import styled from "styled-components";
import { Router, Link } from "@reach/router"
import Header from "./components/Header/Header";
import Homepage from './components/Homepage/Homepage'
import Events from './components/Events/Events'
import Donations from './components/Donations/Donations'


const PageNotFound = () => "Page doesnt exist";
const SanoApp = () => {
  return (
    <>
      <Header />

      <Router>
        <Homepage path='/' />
        {/* <AboutUs /> */}
        <Events path="events" />
        <Donations path="donations" />
        <PageNotFound default />
      </Router>
    </>
  );
};

export default SanoApp;