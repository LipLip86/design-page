import React, { Component } from 'react';
import s from './Nav.module.css';
import logo from './Logo.svg'
import search from './Search.svg'

const Navbar: any = () => {
  return (
   <div className={s.container}>
    <div className={s.logo}>
      <img src={logo}/>
    <h2></h2>
    </div>
    <div className={s.nav}>
      <ul className={s.nav__list}>
      <li className={s.nav__list_link}>Home</li>
      <li className={s.nav__list_link}>Pages</li>
      <li className={s.nav__list_link}>Services</li>
      <li className={s.nav__list_link}>Project</li>
      <li className={s.nav__list_link}>Blog</li>
      <li className={s.nav__list_link}>Contact</li>
      </ul>
    </div>
    <div>
      <img src={search} />
    </div>
  </div>
  )
}

export default Navbar
