import React from "react";
import s from "./styles.module.css";
import img1 from "../../assets/Photo_work1.jpg";
import icon1 from "../../assets/Icon_work1.svg";
import img2 from "../../assets/Photo_work2.jpg";
import icon2 from "../../assets/Icon_work2.svg";
import img3 from "../../assets/Photo_work3.jpg";
import icon3 from "../../assets/Icon_work3.svg";
import img4 from "../../assets/Photo_work4.jpg";
import icon4 from "../../assets/Icon_work4.svg";

const Work: any = () => {
  return (
    <div className={s.work}>
      <div className={s.work__text}>
        <h2>How We Work</h2>
        <p>It is a long established fact will be distracted. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry.</p>
      </div>

      <div className={s.container_work_main__picture_block}>
        <div className={s.container_work_main__picture_block__left}>
        <img src={img1} alt="work" />
      </div>
        <div className={s.container_work_main__picture_block__right}>
          <div className={s.container_work_main__picture_block__right__top}>
          <img src={icon1} alt="icon"/>
          <h2>01</h2>
          </div>
          <div className={s.container_work_main__picture_block__right__middle}>
          <h3>Concept & Details</h3>
          <p>It is a long established fact will be distracted.
            Lorem Ipsum is simply dummy from text of the and
            typesetting indufstry.</p>
            </div>
    </div>
      </div>

      <div className={`${s.container_work_main__picture_block} ${s.custom}`}>
        <div className={s.container_work_main__picture_block__left}>
          <img src={img2} alt="work" />
        </div>
        <div className={s.container_work_main__picture_block__right}>
          <div className={s.container_work_main__picture_block__right__top}>
            <img src={icon2} alt="icon"/>
            <h2>02</h2>
          </div>
          <div className={s.container_work_main__picture_block__right__middle}>
            <h3>Concept & Details</h3>
            <p>It is a long established fact will be distracted.
              Lorem Ipsum is simply dummy from text of the and
              typesetting indufstry.</p>
          </div>
        </div>
      </div>

      <div className={s.container_work_main__picture_block}>
        <div className={s.container_work_main__picture_block__left}>
          <img src={img3} alt="work" />
        </div>
        <div className={s.container_work_main__picture_block__right}>
          <div className={s.container_work_main__picture_block__right__top}>
            <img src={icon3} alt="icon"/>
            <h2>03</h2>
          </div>
          <div className={s.container_work_main__picture_block__right__middle}>
            <h3>Concept & Details</h3>
            <p>It is a long established fact will be distracted.
              Lorem Ipsum is simply dummy from text of the and
              typesetting indufstry.</p>
          </div>
        </div>
      </div>

      <div className={`${s.container_work_main__picture_block} ${s.custom}`}>
        <div className={s.container_work_main__picture_block__left}>
          <img src={img4} alt="work" />
        </div>
        <div className={s.container_work_main__picture_block__right}>
          <div className={s.container_work_main__picture_block__right__top}>
            <img src={icon4} alt="icon"/>
            <h2>04</h2>
          </div>
          <div className={s.container_work_main__picture_block__right__middle}>
            <h3>Concept & Details</h3>
            <p>It is a long established fact will be distracted.
              Lorem Ipsum is simply dummy from text of the and
              typesetting indufstry.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
