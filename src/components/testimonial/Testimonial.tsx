import React from 'react';
import s from './Testimonial.module.css'

interface IReview {
  name: string,
  location: string,
  text: string,
  photo: any
}

const Testimonial = (props: IReview): JSX.Element => {
  const {
    name,
    location,
    text,
    photo
  } = props
  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <img src={ photo } alt="image" />
        <div>
          <h3>
            { name }
          </h3>
          <p>
            { location }
          </p>
        </div>
      </div>
      <p className={s.card__text}>{ text }</p>
    </div>
  )
}

export default Testimonial;
