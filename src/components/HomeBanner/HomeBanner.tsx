import React from "react";
import { useNavigate } from "react-router-dom";
import { BaseButton } from "../ui";
import photo from "../../assets/banners/Photomain.jpg";
import { NavLink } from "react-router-dom";

import s from "./styles.module.css";

const HomeBanner = (): JSX.Element => {
  return (
    <div className={s.container}>
      <img className={s.image} src={photo} alt="home" />
      <div className={s.content}>
        <h1 className={s.content__header}>Let Your Home Be Unique</h1>
        <p className={s.content__text}>
          There are many variations of the passages of lorem Ipsum fromavailable, majority.
        </p>
        <NavLink to="/about" >
        <BaseButton variant="default" color="blue" rightIcon={true}>
          Get Started
        </BaseButton> </NavLink>
      </div>
    </div>
  );
};

export default HomeBanner;
