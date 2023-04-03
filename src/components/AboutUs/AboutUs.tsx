import React from 'react';
import imageround from './Imageround.png';
import s from './styles.module.css'
import callicon from './Callicon.jpg'

const AboutUs: any = () => {
  return (
    <div className={s.container2}>
      <div className={s.content}>
        <div className={s.content__top}>
          <h2>
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal
          </p>
        </div>
        <div className={s.content__contacts}>
          <div className={s.content__contacts__image}>
            <img src={callicon} alt="callicon"/>
          </div>
          <div className={s.content__contacts__text}>
            <h4>
              012345678
            </h4>
            <p>
              Call Us Anytime
            </p>
          </div>
        </div>
        <div className={s.button}>
          Get The Estimate
        </div>
      </div>
      <div>
        <img src={imageround} alt="bg"/>
      </div>
    </div>
  )
}

export default AboutUs;
