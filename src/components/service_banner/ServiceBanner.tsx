import React from "react";
import img from "../../assets/banners/Photo_service.jpg";
import s from "./styles.module.css";

const ServiceBanner = (): JSX.Element => {
  return (
    <div>
      <div className={s.container}>
        <img src={img} alt="banner" className={s.banner} />
        <div className={s.container__text}>
          <h3>Services</h3>
          <p>Home / Services</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
