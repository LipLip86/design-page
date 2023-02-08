import React, { Component } from 'react';
import s from './Subcontent.module.css';

const Subcontent: any = (props: any) => {
  const {
    title,
    text,
    button
  }=props
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  )
}

export default Subcontent;
