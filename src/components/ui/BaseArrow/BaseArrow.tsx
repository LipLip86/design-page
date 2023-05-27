import React from "react";
import s from "./styles.module.css";

interface IProps {
  imgUrl?: string;
  children?: string;
  colorBg: string;
}

const BaseArrow = (props: IProps) => {
  const { imgUrl, children, colorBg } = props;

  return (
    <div className={s.circle} style={{ backgroundColor: colorBg }}>
      {children ? <span>{children}</span> : <img src={imgUrl} alt="" />}
    </div>
  );
};

export default BaseArrow;
