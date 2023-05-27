import React from "react";
import { BaseButton } from "../ui";
import photo from "../../assets/homebanner/Photomain.jpg";

import s from "./styles.module.css";

const HomeBanner: any = () => {
  return (
    <div className={s.container}>
      <img className={s.image} src={photo} alt="home" />
      <div className={s.content}>
        <h1 className={s.content__header}>Let Your Home Be Unique</h1>
        <p className={s.content__text}>
          There are many variations of the passages of lorem Ipsum fromavailable, majority.
        </p>
        <BaseButton variant="default" color="blue" rightIcon={true}>
          Get Started
        </BaseButton>
      </div>
    </div>
  );
};

export default HomeBanner;
