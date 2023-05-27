import React from "react";
import img from "../../assets/about_ph.jpg";
import s from "./styles.module.css";

const AboutBanner = (): JSX.Element => {
  return (
    <div className={s.container}>
      <img src={img} alt="banner" className={s.banner} />
      <div className={s.container__text}>
        <h3>About Us</h3>
        <p>Home / About Us</p>
      </div>
    </div>
  );
};

export default AboutBanner;
