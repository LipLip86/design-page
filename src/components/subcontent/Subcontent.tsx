import React, { Component } from 'react';
import { JsxElement } from 'typescript';
import s from './Subcontent.module.css';

interface ICard {
  title: string,
  text: string,
  link: string
}

const Subcontent = (props: ICard): JSX.Element => {
  const {
    title,
    text,
    link
  }=props
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p className={s.text}>{text}</p>
      <a>{link}</a>
    </div>
  )
}

export default Subcontent;
