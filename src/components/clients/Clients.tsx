import React from "react";
import s from './Client.module.css'
import img1 from './01.svg'
import img2 from './02.svg'
import img3 from './03.svg'
import img4 from './04.svg'
import img5 from './05.svg'


const Clients: any = () => {

  return (
  <div className={s.client_logo}>
    <img src={img1} alt="image"/>
    <img src={img2} alt="image"/>
    <img src={img3} alt="image"/>
    <img src={img4} alt="image"/>
    <img src={img5} alt="image"/>
  </div>
)}

export default Clients;
