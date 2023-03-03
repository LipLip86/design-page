import React, { Component } from 'react';
import s from './Testimonial.module.css'
import { JsxElement } from 'typescript';
import photo1 from './Photoreview1.jpg'

interface IReview {
  name: string,
  location: string,
  text: string
}

const Testimonial = (props: IReview): JSX.Element => {
  const {
    name,
    location,
    text,
  }=props
  return (
    <div className={s.container}>
    <h3>{name} {location}</h3>
    <p>{text}</p>
    </div>
  )
}

export default Testimonial;
