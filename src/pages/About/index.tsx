import React from "react";
import { AboutBanner, Quote, Services, Team, Form } from "../../components/index";

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