import React from "react";
import s from "./Form.module.css";

const Form: any = () => {
  return (
    <div className={s.form_container_main}>
      <h3>Creative project? Let's have a productive talk.</h3>
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
      <p>Email</p>
      <textarea>Hello, I am interested in...</textarea>
      </form>
    </div>
  )
}

export default Form;
