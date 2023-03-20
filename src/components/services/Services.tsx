import React from "react";
import s from "./Services.module.css";
import img1 from "../../assets/Photoabout.jpg";
import img2 from "../../assets/Photoabout2.jpg";


const Services: any = () => {
  return (
    <div className={s.container_service}>
      <div className={s.container_service__first}>
      <div className={s.container_service__left}>
        <h3>What We Do</h3>
        <p>It is a long established fact that a reader will be
          distracted by the of readable content of a page when
          lookings at its layouts the points of using that it has a more-or-less normal.</p>
          </div>
  <div className={s.container_service__right}>
  <img src={img1} />
  </div>
      </div>
      <div className={s.container_service__second}>
      <div className={s.container_service__right}>
  <img src={img2} />
  </div>
      <div className={s.container_service__left}>
        <h3>The End Result</h3>
        <p>It is a long established fact that a reader will be
          distracted by the of readable content of a page when
          lookings at its layouts the points of using that it has a more-or-less normal.</p>
      </div>
    </div>
    </div>
  )
}

export default Services;
