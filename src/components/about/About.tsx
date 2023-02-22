import React, { Component } from 'react';
import imageround from './Imageround.svg';
import s from './About.module.css'
import callicon from './Callicon.jpg'

const About: any = () => {
  return (
    <div className={s.container2}>
      <div className={s.item1}>
      <h2>We Create The Art
        Of Stylish Living
        Stylishly</h2>
        <p>It is a long established fact that a reader will be
          distracted by the of readable content of a page
          when lookings at its layouts the points of using
          that it has a more-or-less normal </p></div>
          <div className={s.item2}>
          <img src={callicon} />
            <h3>015732812826</h3>
          <p>Call Us Anytime!</p> </div>
          <button>Get Free Estimate</button>
              <div className={s.item3}>
                <img src={imageround} />
    </div>
    </div>
  )
}

export default About;
