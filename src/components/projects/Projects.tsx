import React from "react";
import s from "./projects.module.css"
import img1 from "../../assets/Ph_project1.jpg"
import arrow from "../../assets/arrow.svg"
import img2 from "../../assets/Ph_project2.jpg"
import img3 from "../../assets/Ph_photo3.jpg"
import img4 from "../../assets/Ph_project4.jpg"


const Projects: any = () => {
  return (
    <div className={s.container_projects}>
      <div className={s.text}>
      <h3>Follow Our Projects</h3>
      <p>It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.
      </p>
      </div>
      <div className={s.photo_container1}>
        <div className={s.block1}>
        <img src={ img1 } />
        <div>
          <h4 className={s.header}>Modern Kitchen</h4>
          <p className={s.text_area}>Decor / Achitecture</p>
          <div>
            <img src={arrow}/>
          </div>
          </div>
          <div>
            <img src={img2} />
            </div>
            <div>
          <h4 className={s.header}>Modern Kitchen</h4>
          <p className={s.text_area}>Decor / Achitecture</p>
          <div>
            <img src={arrow}/>
          </div>
          </div>
          </div>
        </div>
            <div className={s.photo_container2}>
              <img src={img3} />
            <div>
          <h4 className={s.header}>Modern Kitchen</h4>
          <p className={s.text_area}>Decor / Achitecture</p>
          <div>
            <img src={arrow}/>
          </div>
          </div>
            <div>
              <img src={img4} />
            </div>
            <div>
          <h4 className={s.header}>Modern Kitchen</h4>
          <p className={s.text_area}>Decor / Achitecture</p>
          <div>
            <img src={arrow}/>
          </div>
          </div>
          </div>
      </div>
  )
}

export default Projects;
