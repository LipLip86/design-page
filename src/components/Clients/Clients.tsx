import React from "react";
import s from "./styles.module.css";
import img1 from "../../assets/clients_logos/01.svg";
import img2 from "../../assets/clients_logos/02.svg";
import img3 from "../../assets/clients_logos/03.svg";
import img4 from "../../assets/clients_logos/04.svg";
import img5 from "../../assets/clients_logos/05.svg";

const Clients: any = () => {
  return (
    <div className={s.client_logo}>
      <img src={img1} alt="logo" />
      <img src={img2} alt="logo" />
      <img src={img3} alt="logo" />
      <img src={img4} alt="logo" />
      <img src={img5} alt="logo" />
    </div>
  );
};

export default Clients;
