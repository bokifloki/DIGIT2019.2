import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Events from "./components/Events/Events";
import Donations from "./components/Donations/Donations";
import AboutUs from "./components/AboutUs/AboutUs";
import Volunteer from "./components/Volunteer/Volunteer";
import ContactUs from "./components/ContactUs/ContactUs";
import Gallery from "./components/Gallery/Gallery";

const PageNotFound = () => "Page doesnt exist";
const SanoApp = () => {
  return (
    <>
      <Header />
      <Router>
        <Homepage path="/" />
        <AboutUs path="about-us"/>
        <Events path="projects" />
        <Donations path="donate" />
        <ContactUs path="contact-us" />
        <Volunteer path="volunteer" />
        <Gallery path="gallery" />
        <PageNotFound default />
      </Router>
      <Footer />
    </>
  );
};

export default SanoApp;
