import s from "./styles.module.css";
import React from "react";
import arrow from "../../../assets/ButtonIcons/right-icon.svg";

interface IButton {
  variant: string,
  color: string,
  disabled?: boolean,
  children: any,
  click?: () => {},
  rightIcon?: boolean
}

const BaseButton = (props: IButton) => {
  const { variant, color, disabled, children, click, rightIcon } = props;

  const btnType = `btn_${variant}-${color}`;
  // 'btn_default-yellow'
  // console.log('btnType :', btnType)

  const currentStyle = `${s.btn} ${s[btnType]}`;
  // 'btn btn_default-yellow'
  // console.log('currentStyle :', currentStyle)

  return (
    <>
      <button className={currentStyle} disabled={disabled} onClick={click}>
        <div className={s.content}>
          {children}
          {rightIcon && <img className={s.img} src={arrow} alt="arrow right" />}
        </div>
      </button>
    </>
  );
};

export default BaseButton;
