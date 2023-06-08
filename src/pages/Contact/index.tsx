import React from "react";
import s from "./index.module.css";
import { BannerTop } from "../../components/widgets";
import img1 from "../../assets/banners/contacts_ph.jpg";
import { Form } from "../../components";
import Map from "../../components/Map/Map";

const Contact = () => {
  return (
    <div>
      <BannerTop img={img1} title="Contact Us" subtitle="Home / Contact" />
      <div className={s.container_text}>
        <h3>We love meeting new people and helping them. </h3>
      </div>
      <Form />
      <Map />
    </div>
  );
};

export default Contact;
