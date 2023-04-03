import React from "react";
import s from "./Blog.module.css";
import img1 from "../../assets/blog_ph1.jpg";
import img2 from "../../assets/blog_ph2.jpg";
import img3 from "../../assets/blog_ph3.jpg";
import arrow from "../../assets/arrow.svg";


const Blog: any = () => {
  return (
<div className={s.container_main}>
<div className={s.container_text}>
  <h2>Articles & News</h2>
  <p>It is a long established fact that a reader will be distracted by the of readable content
    of a page when lookings at its layouts the points of using.</p>
</div>
<div className={s.container_pictures}>
  <div className={s.container_card}>
    <div className={s.card_top}>
      <img src={ img1 } />
      <span> Kitchen Design</span>
      </div>
    <div className={s.card_middle}>
      <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
    </div>
    <div className={s.card_bottom}>
    <p>22 December,2022</p>
    <img src={arrow} alt="arrow" />
    </div>
    </div>
  <div className={s.container_card2}>
    <div className={s.card_top}>
      <img src={ img2 } />
      <span> Kitchen Design</span>
    </div>
    <div className={s.card_middle}>
    <h3>Let's Get Solution For Building Construction Work</h3>
    </div>
    <div className={s.card_bottom}>
    <p>26 December,2022</p>
    <img src={arrow} alt="arrow" />
    </div>
  </div>
  <div className={s.container_card}>
    <div className={s.card_top}>
      <img src={ img3 } />
      <span> Kitchen Design</span>
    </div>
    <div className={s.card_middle}>
      <h3>Best For Any Office & Business Interior Solution</h3>
    </div>
    <div className={s.card_bottom}>
      <p>27 December,2022</p>
      <img src={arrow} alt="arrow" />
    </div>
  </div>
</div>
</div>
  )
}

export default Blog;
