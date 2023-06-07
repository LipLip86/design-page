import React from "react";
import s from "./styles.module.css";
import line from "../../assets/Line.png";

const Counter = (): JSX.Element => {
  return (
    <div className={s.counter}>
      <div className={s.counter_inner}>
        <div className={s.counter__item}>
          <h3 className={s.counter__item_number}>12</h3>
          <p className={s.counter__item_text}>Years of Experience</p>
        </div>
        <img src={line} alt="line" />
        <div className={s.counter__item}>
          <h3 className={s.counter__item_number}>85</h3>
          <p className={s.counter__item_text}>Success Projects</p>
        </div>
        <img src={line} alt="line" />
        <div className={s.counter__item}>
          <h3 className={s.counter__item_number}>15</h3>
          <p className={s.counter__item_text}>Active Projects</p>
        </div>
        <img src={line} alt="line" />
        <div className={s.counter__item}>
          <h3 className={s.counter__item_number}>95</h3>
          <p className={s.counter__item_text}>Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
