import s from "./styles.module.css";
import React from "react";
import arrow from "../../../assets/ButtonIcons/right-icon.svg";
import arrowBlack from "../../../assets/ButtonIcons/right-icon-black.svg";

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

  const currentStyle = `${s.btn} ${s[btnType]}`;

  const currentIcon = color === 'yellow' ? arrowBlack : arrow

  return (
    <>
      <button className={currentStyle} disabled={disabled} onClick={click}>
        <div className={s.content}>
          {children}
          {rightIcon && <img className={s.img} src={currentIcon} alt="arrow right" />}
        </div>
      </button>
    </>
  );
};

export default BaseButton;
