import React from "react";
import s from "./styles.module.css";
import line from "../../assets/Line.png";

const Counter: any = () => {
  return (
    <div className={s.counter}>
      <div className={s.counter_inner}>
        <div className={s.counter_inner_item}>
      <h3>12</h3>
      <p>Years of Experience</p>
      </div>
      <img src={ line } alt="line"/>
      <div className={s.counter_inner_item}>
      <h3>85</h3>
      <p>Success Projects</p>
      </div>
      <img src={ line } alt="line"/>
      <div className={s.counter_inner_item}>
      <h3>15</h3>
      <p>Active Projects</p>
      </div>
      <img src={ line } alt="line"/>
      <div className={s.counter_inner_item}>
      <h3>95</h3>
      <p>Happy Customers</p>
      </div>
      </div>
    </div>
  )

}

export default Counter;
