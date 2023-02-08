import React, { Component } from 'react';
import photo from './Photomain.jpg'
import s from './Banner.module.css';


const Banner: any = () => {
  return (
    <div className={s.container}>
        <img src={photo} />
      <div className={s.text_block}>
      <h1>Let Your Home Be Unique</h1>
      <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
      <button> Get started</button>
      </div>

    </div>
  )
  }

export default Banner;
