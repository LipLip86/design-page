import s from './BaseButton.module.css'
import React from "react";
import arrow from '../../assets/arrow.svg'

const BaseButton = (props: any) => {
  const { variant, color, disabled, children, click, rightIcon } = props;

  const btnType = `btn_${variant}-${color}`;
  // 'btn_default-yellow'
  // console.log('btnType :', btnType)

  const currentStyle = `${s.btn} ${s[btnType]}`;
  // 'btn btn_default-yellow'
  // console.log('currentStyle :', currentStyle)

  return (
    <button
      className={currentStyle}
      disabled={disabled}
      onClick={click}
    >
      {children}
      {
        rightIcon &&
        <img
          className={s.img}
          src={arrow}
          alt="arrow right"
        />
      }
    </button>
  );
};

export default BaseButton;
