import React from 'react'
import s from './styles.module.css'
import img1 from '../../assets/Photo_project.jpg'

const ProjectBanner: any = () => {
  return (
    <div>
      <div className={s.container}>
        <img src={ img1 } alt="banner" className={s.banner}/>
      <div className={s.container__text}>
        <h3>Projects</h3>
        <p>Home / Projects</p>
      </div>
      </div>
    </div>
  )
}

export default ProjectBanner
