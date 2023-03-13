import React from "react";
import s from "./counter.module.css";
import line from "../../assets/Line.png";

const Counter: any = () => {
  return (
    <div className={s.counter}>
      <div className={s.counter1}>
      <h3>12</h3>
      <p>Years of Experience</p>
      <img src={ line } />
      </div>
      <div className={s.counter1}>
      <h3>85</h3>
      <p>Success Projects</p>
      <img src={ line } />
      </div>
      <div className={s.counter1}>
      <h3>15</h3>
      <p>Active Projects</p>
      <img src={ line } />
      </div>
      <div className={s.counter1}>
      <h3>95</h3>
      <p>Happy Customers</p>
      </div>
    </div>

  )

}

export default Counter;
