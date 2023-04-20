import React from 'react'
import s from './styles.module.css'

interface IProps {
  img: string,
  colorBg: string
}

const BaseArrow = (props: IProps) => {
  const { img, colorBg } = props;

  return (
    <div className={s.circle} style={{backgroundColor: colorBg }}>
      <img src={img} alt="" />
    </div>
  )
}

export default BaseArrow
