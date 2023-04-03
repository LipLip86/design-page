import React from 'react';
import s from './styles.module.css';

interface ICard {
  title: string,
  text: string,
  link: string
}

const StageCard = (props: ICard): JSX.Element => {
  const {
    title,
    text,
    link
  }=props
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p className={s.text}>{text}</p>
      <a href="">{link}</a>
    </div>
  )
}

export default StageCard;
