import React from 'react'
import s from './styles.module.css'

interface IProps {
  img?: string,
  children?: string,
  colorBg: string
}

const BaseArrow = (props: IProps) => {
  const { img, children, colorBg } = props;

  return (
    <div className={s.circle} style={{backgroundColor: colorBg }}>
      {
        img ?? <img src={img} alt="" />
      }
      {
        children ?? <p>{children}</p>
      }
    </div>
  )
}

export default BaseArrow
