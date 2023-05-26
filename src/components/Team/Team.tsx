import React from "react";
import s from "./styles.module.css";
import photo1 from "../../assets/Photo_team.jpg";
import photo2 from "../../assets/Photo_team2.jpg";
import photo3 from "../../assets/Photo_team3.jpg";
import fb from '../../assets/social_media_icons/fb.svg';
import twitter from '../../assets/social_media_icons/twitter.svg';
import lnkdn from '../../assets/social_media_icons/Lnkdn.svg';
import insta from '../../assets/social_media_icons/insta.svg';

const Team: any = () => {

  return (
    <div className={s.team}>
      <div className={s.team__content}>
        <p className={s.team__content_title}>What People Think About Us</p>
        <div className={s.team__content_cards}>

          <div className={s.flip_card}>
            <div className={s.flip_card_inner}>
              <div className={s.flip_card_front}>
                <img src={photo1} alt="Avatar" className={s.front__img} />
              </div>
              <div className={s.flip_card_back}>

                <div className={s.card__info__top}>
                  <p>Patrick Dale</p>
                  <p>Architect & Engineer</p>
                </div>

                <div className={s.card__info__middle}>
                  <img src={fb} alt="facebook_icon" />
                  <img src={twitter} alt="twitter_icon" />
                  <img src={lnkdn} alt="lnkdn_icon" />
                  <img src={insta} alt="insta_icon" />
                </div>

                <div className={s.card__info__bottom}>
                  <p>+1 (378) 400-1234 julie@email.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.flip_card}>
            <div className={s.flip_card_inner}>
              <div className={s.flip_card_front}>
                <img src={photo2} alt="Avatar" className={s.front__img} />
              </div>
              <div className={s.flip_card_back}>

                <div className={s.card__info__top}>
                  <p>Patrick Dale</p>
                  <p>Architect & Engineer</p>
                </div>

                <div className={s.card__info__middle}>
                  <img src={fb} alt="facebook_icon" />
                  <img src={twitter} alt="twitter_icon" />
                  <img src={lnkdn} alt="lnkdn_icon" />
                  <img src={insta} alt="insta_icon" />
                </div>

                <div className={s.card__info__bottom}>
                  <p>+1 (378) 400-1234 julie@email.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.flip_card}>
            <div className={s.flip_card_inner}>
              <div className={s.flip_card_front}>
                <img src={photo3} alt="Avatar" className={s.front__img} />
              </div>
              <div className={s.flip_card_back}>

                <div className={s.card__info__top}>
                  <p>Patrick Dale</p>
                  <p>Architect & Engineer</p>
                </div>

                <div className={s.card__info__middle}>
                  <img src={fb} alt="facebook_icon" />
                  <img src={twitter} alt="twitter_icon" />
                  <img src={lnkdn} alt="lnkdn_icon" />
                  <img src={insta} alt="insta_icon" />
                </div>

                <div className={s.card__info__bottom}>
                  <p>+1 (378) 400-1234 julie@email.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className={s.flip_card}>
            <div className={s.flip_card_inner}>
              <div className={s.flip_card_front}>
                <img src={photo1} alt="Avatar" className={s.front__img} />
              </div>
              <div className={s.flip_card_back}>

                <div className={s.card__info__top}>
                  <p>Patrick Dale</p>
                  <p>Architect & Engineer</p>
                </div>

                <div className={s.card__info__middle}>
                  <img src={fb} alt="facebook_icon" />
                  <img src={twitter} alt="twitter_icon" />
                  <img src={lnkdn} alt="lnkdn_icon" />
                  <img src={insta} alt="insta_icon" />
                </div>

                <div className={s.card__info__bottom}>
                  <p>+1 (378) 400-1234 julie@email.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Team;
