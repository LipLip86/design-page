import React from "react";
import { Quote, Services, Team, Form } from "../../components/index";
import { BannerTop } from "../../components/widgets";
import bannerImage from "../../assets/banners/about_ph.jpg";

import s from "./index.module.css";

const About = () => {
  const bannerTopData = {
    img: bannerImage,
    title: "About Us",
    subtitle: "Home / About Us",
  };

  return (
    <>
      <BannerTop
        img={bannerTopData.img}
        title={bannerTopData.title}
        subtitle={bannerTopData.subtitle}
      />
      <div className={s.container}>
        <Quote />
        <Services />
      </div>
      <Team />
      <div className={s.container}>
        <Form />
      </div>
    </>
  );
};

export default About;
