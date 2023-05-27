import s from "./styles.module.css";
import React from "react";

interface IProps {
  img: string;
  title: string;
  subtitle: string;
}

const BannerTop = (props: IProps): JSX.Element => {
  const { img, title, subtitle } = props;

  return (
    <div className={s.container}>
      <img src={img} alt="banner" className={s.banner} />
      <div className={s.container__text}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default BannerTop;
