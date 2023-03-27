import React from "react";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";
import Team from "../../components/team/Team";

export const About = () => {
  return (
    <div className="container">
      <AboutBanner />
      <Quote />
      <Services />
      <Team />
    </div>
  )
};
