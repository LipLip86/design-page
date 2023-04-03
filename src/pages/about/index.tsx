import React from "react";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Quote from "../../components/quote/Quote";
import Services from "../../components/services/Services";
import Team from "../../components/team/Team";
import Form from "../../components/form/Form";
import s from './index.module.css';

export const About = () => {
  return (
    <div className={s.container}>
      <AboutBanner />
      <Quote />
      <Services />
      <Team />
      <Form />
    </div>
  )
};
