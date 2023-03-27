import React from "react";
import s from "./Footer.module.css"
import logo from "../../../assets/Logo.svg";
import fb from "../../../assets/fb.svg";
import twitter from "../../../assets/twitter.svg";
import lnkdn from "../../../assets/Lnkdn.svg";
import insta from "../../../assets/insta.svg";

const Footer: any = () => {
  return (
<div className={s.container_footer}>
  <div className={s.container_footer__logo}>
    <img src={ logo } />
    <p>It is a long established fact that a reader will
      be distracted lookings.</p>
      <div className={s.container_footer__logo__images}>
      <img src={fb} />
      <img src={twitter} />
      <img src={lnkdn} />
      <img src={insta} />
      </div>
  </div>
  <div className={s.container_footer__pages}>
    <h3>Pages</h3>
      <p>About Us</p>
      <p>Our Projects</p>
      <p>Our Team</p>
      <p>Contact Us</p>
      <p>Services</p>
  </div>
  <div className={s.container_footer__services}>
    <h3>Services</h3>
      <p>Kitchen</p>
      <p>Living Area</p>
      <p>Bathroom</p>
      <p>Dining Hall</p>
      <p>Bedroom</p>
  </div>
  <div className={s.container_footer__contact}>
    <h3>Contact</h3>
      <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
      <p>contact@interno.com</p>
      <p>(123) 456 - 7890</p>
  </div>
</div>
  )
}

export default Footer;
