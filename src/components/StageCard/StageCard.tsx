import React from 'react';
import s from './styles.module.css';

interface ICard {
  title: string,
  text: string,
  link: string,
  className?: string
}

const StageCard = (props: ICard): JSX.Element => {
  const {
    title,
    text,
    link,
    className
  }=props
  const cls = `${s.container} ${className}`
  return (
    <div className={cls}>
      <h2>{title}</h2>
      <p className={s.text}>{text}</p>
      <a href="">{link}</a>
    </div>
  )
}

export default StageCard;
