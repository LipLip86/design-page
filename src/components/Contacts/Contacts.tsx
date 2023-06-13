import React from "react";
import s from "./styles.module.css";
import { BaseButton } from "../ui";
import { NavLink } from "react-router-dom";

const Contacts = (): JSX.Element => {
  return (
    <div className={s.contacts}>
      <h3 className={s.contacts__title}>Wanna join the interno?</h3>
      <p className={s.contacts__subtitle}>It is a long established fact will be distracted.</p>
      <NavLink to="/contact" className={s.nav__list_link}>
        <BaseButton variant="default" color="yellow" rightIcon={true}>
          Contact With Us
        </BaseButton>
      </NavLink>
    </div>
  );
};

export default Contacts;
