import React from "react";
import s from "./index.module.css";
import { Tabs } from "../../components/index";
import ProjectBanner from "../../components/ProjectBanner/ProjectBanner";

const Projects = () => {
  return (
    <div>
      <ProjectBanner />
      <Tabs />
    </div>
  );
};

export default Projects;
