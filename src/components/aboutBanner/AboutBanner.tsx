import React from "react";
import img from "../../assets/about_ph.jpg";
import s from "./AboutBanner.module.css";

const AboutBanner: any = () => {
  return (
<div className={s.container}>
<img src={ img } />
<div className={s.container__text}>
  <h3>About Us</h3>
  <p>Home / About Us</p>
</div>
</div>
  )
};

export default AboutBanner;
