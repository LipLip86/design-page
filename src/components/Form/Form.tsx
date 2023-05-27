import React from "react";
import s from "./styles.module.css";

const Form = (): JSX.Element => {
  return (
    <div className={s.form_container_main}>
      <form className={s.form}>
        <div className={s.input_names}>
          <input type="text" placeholder="Name" className={s.input} />
        </div>

        <div className={s.input_email}>
          <input type="text" placeholder="Email" className={s.input} />
        </div>

        <div className={s.textarea}>
          <textarea rows={5} placeholder="Hello Iam Interested in.." className={s.input} />
        </div>
      </form>
    </div>
  );
};

export default Form;
