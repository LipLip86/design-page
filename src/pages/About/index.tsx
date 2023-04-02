import React from "react";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";
import Team from "../../components/team/Team";
import Form from "../../components/form/Form";
import s from './index.module.css';

const About = () => {
  return (
    <>
      <AboutBanner />
      <div className={s.container}>
        <Quote />
        <Services />
        <Team />
        <Form />
      </div>
    </>
  )
};

export default About;
