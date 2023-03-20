import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";

export const About = () => {
  return (
    <div className="container">
      <Navbar />
      <AboutBanner />
      <Quote />
      <Services />
      </div>
  )
};
