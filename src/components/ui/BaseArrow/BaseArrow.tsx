import React from 'react'
import s from './styles.module.css'

interface IProps {
  imgUrl?: string,
  children?: string,
  colorBg: string
}

const BaseArrow = (props: IProps) => {
  const { imgUrl, children, colorBg } = props;

  return (
    <div className={s.circle} style={{backgroundColor: colorBg }}>
      <img src={img} alt="" />
      <p>{children}</p>
    </div>
  )
}

export default BaseArrow
