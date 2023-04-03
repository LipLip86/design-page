import React from "react";
import s from "./styles.module.css";
import photo1 from "../../assets/Photo_team.jpg";
import photo2 from "../../assets/Photo_team2.jpg";
import photo3 from "../../assets/Photo_team3.jpg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import lnkdn from "../../assets/Lnkdn.svg";
import insta from "../../assets/insta.svg";

const Team: any = () => {

  return (
<div className={s.container_team_main}>
  <h3>What the People Thinks About Us
</h3>
<div className={s.container_team__card_container}>

  <div className={s.flip_card}>
    <div className={s.flip_card_inner}>
      <div className={s.flip_card_front}>
        <img src={photo1} alt="Avatar" className={s.front__img} />
      </div>
      <div className={s.flip_card_back}>
      <div className={s.card__info__top}>
        <h4>Patrick Dale</h4>
        <p>Architect & Engineer</p>
        </div>
        <div className={s.card__info__middle}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={lnkdn} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className={s.card}>
    <div className={s.card__inner}>
      <img src={photo1} alt="" className={s.card__image} />

      <div className={s.card__info}>
        <div className={s.card__info__top}>
          <h4>Patrick Dale</h4>
          <p>Design, Australia</p>
        </div>
        <div className={s.card__info__middle}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={lnkdn} alt="" />
          <img src={insta} alt="" />
        </div>
        <div className={s.card__info__bottom}>
          <p> 1 (378) 400-1234</p>
          <p>julie@email.com</p>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div className={s.card}>
    <img src={photo2} alt="" className={s.card__image} />
    <div className={s.card__info}>
    <div className={s.card__info__top}>
          <h4>Nattasha Julie</h4>
          <p>Design, Australia</p>
        </div>
        <div className={s.card__info__middle}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={lnkdn} alt="" />
          <img src={insta} alt="" />
        </div>
      <div className={s.card__info__bottom}>
      <p> 1 (378) 400-1234</p>
      <p>julie@email.com</p>
      </div>
    </div>
  </div>

  <div className={s.card}>
    <img src={photo3} alt="" className={s.card__image} />
    <div className={s.card__info}>
    <div className={s.card__info__top}>
          <h4>Marie Jiles</h4>
          <p>Design, Australia</p>
        </div>
        <div className={s.card__info__middle}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={lnkdn} alt="" />
          <img src={insta} alt="" />
        </div>
      <div className={s.card__info__bottom}>
      <p> 1 (378) 400-1234</p>
      <p>julie@email.com</p>
      </div>
    </div>
  </div>

  <div className={s.card}>
    <img src={photo1} alt="" className={s.card__image} />
    <div className={s.card__info}>
    <div className={s.card__info__top}>
          <h4>Nattasha Julie</h4>
          <p>Design, Australia</p>
        </div>
        <div className={s.card__info__middle}>
          <img src={fb} alt="" />
          <img src={twitter} alt="" />
          <img src={lnkdn} alt="" />
          <img src={insta} alt="" />
        </div>
      <div className={s.card__info__bottom}>
      <p> 1 (378) 400-1234</p>
      <p>julie@email.com</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Team;
