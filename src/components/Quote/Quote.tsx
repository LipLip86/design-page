import React from "react";
import s from "./styles.module.css";
import imgLeft from "../../assets/Pattern_left.svg";
import imgRight from "../../assets/Pattern_right.svg";

const Quote: any = () => {
  return (
    <div className={s.container_quote}>
      <div className={s.container_img1}>
        <img src={imgLeft} alt="left" />
      </div>
      <div className={s.container_text}>
        <h2>"</h2>
        <h3>
          I like an interior that defies labeling. I don't really want someone to walk into a room
          and know that I did it
        </h3>
        <p>-BUNNY WILLIAMS</p>
      </div>
      <div className={s.container_img2}>
        <img src={imgRight} alt="right" />
      </div>
    </div>
  );
};

export default Quote;
