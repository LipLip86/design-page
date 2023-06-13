import React from "react";
import s from "./styles.module.css";
import arrow from "../../assets/arrow.svg";
import { BaseArrow } from "../ui";
import { ProjectsCards } from "../../mocks/ProjectsMocks";

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
        {ProjectsCards.map((project) => (
          <div className={s.project_block}>
            <img src={project.image} className={s[project.class]} alt="bg" />
            <div className={s.project_content}>
              <div className={s.project_text}>
                <h4>{project.title}</h4>
                <p>{project.text}</p>
              </div>
              <div>
                <BaseArrow imgUrl={arrow} colorBg="#F4F0EC" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
