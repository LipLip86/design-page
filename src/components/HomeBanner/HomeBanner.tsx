import React from 'react';
import photo from '../../assets/homebanner/Photomain.jpg'
import s from './styles.module.css';

const HomeBanner: any = () => {
  return (
    <div className={s.container}>
      <img className={s.container__image} src={photo} alt="home"/>
      <div className={s.text_block}>
        <h1 className={s.header}>
          Let Your Home Be Unique
        </h1>
        <p>
          There are many variations of the passages of lorem Ipsum fromavailable, majority.
        </p>
        <button>
          Get started
        </button>
      </div>
    </div>
  )
}

export default HomeBanner;
