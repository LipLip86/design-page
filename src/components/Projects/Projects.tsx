import React from "react";
import s from "./styles.module.css";
import img1 from "../../assets/Ph_project1.jpg";
import arrow from "../../assets/arrow.svg";
import img2 from "../../assets/Ph_project2.jpg";
import img3 from "../../assets/Ph_photo3.jpg";
import img4 from "../../assets/Ph_project4.jpg";

const Projects = (): JSX.Element => {
  return (
    <div className={s.container_projects}>
      <div className={s.text}>
        <h3>Follow Our Projects</h3>
        <p>
          It is a long established fact that a reader will be distracted by the of readable content
          of page lookings at its layouts points.
        </p>
      </div>
      <div className={s.projects_container}>
        <div className={s.project_block}>
          <img src={img1} className={s.image_first} alt="bg" />
          <div className={s.project_content}>
            <div className={s.project_text}>
              <h4>Modern Kitchen</h4>
              <p>Decor / Architecture</p>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div className={s.project_block}>
          <img src={img2} className={s.image_second} alt="bg" />
          <div className={s.project_content}>
            <div className={s.project_text}>
              <h4>Modern Kitchen</h4>
              <p>Decor / Architecture</p>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div className={s.project_block}>
          <img src={img3} className={s.image_third} alt="bg" />
          <div className={s.project_content}>
            <div className={s.project_text}>
              <h4>Modern Kitchen</h4>
              <p>Decor / Architecture</p>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div className={s.project_block}>
          <img src={img4} className={s.image_fourth} alt="bg" />
          <div className={s.project_content}>
            <div className={s.project_text}>
              <h4>Modern Kitchen</h4>
              <p>Decor / Architecture</p>
            </div>
            <div>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
