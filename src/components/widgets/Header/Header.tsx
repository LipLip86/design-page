import React from "react";
import s from "./styles.module.css";
import logo from "./Logo.svg";
import search from "./Search.svg";
import { NavLink } from "react-router-dom";

const Header: any = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>
        <NavLink to="/" className={s.nav__list_link}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to="/" className={s.nav__list_link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={s.nav__list_link}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={s.nav__list_link}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={s.nav__list_link}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={s.nav__list_link}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={s.nav__list_link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <img src={search} alt="search icon" />
      </div>
    </div>
  );
};

export default Header;
