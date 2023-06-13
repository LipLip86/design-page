import React from "react";
import s from "./styles.module.css";
import arrow from "../../assets/gold-right-arrow.svg";
import { ICard } from "../../utils/types";

const StageCard = (props: ICard): JSX.Element => {
  const { title, text, link, className, } = props;

  const cls = `${s.container} ${className}`;
  return (
    <div className={cls}>
      <h2 className={s.container__title}>{title}</h2>
      <p className={s.container__text}>{text}</p>
      <a className={s.container__link}>
        {link}
        <img src={arrow} alt="" />
      </a>
    </div>
  );
};

export default StageCard;
