import React from "react";
import Navbar from '../../components/navbar/Navbar'
import s from './index.module.css'
import Banner from '../../components/banner/Banner'
import Subcontent from '../../components/subcontent/Subcontent'
import { cardsConfig } from '../../configs/cardsconfig';
import About from '../../components/about/About'

interface ICard {
  title: string,
  text: string,
  link: string
}

export const Home = () => {
  return (
    <div className={s.container}>
      <Navbar />
        <Banner />
        <div className={s.container__subcontent}>
        {cardsConfig.map((item: ICard)=> (
        <Subcontent
          title={item.title}
          text={item.text}
          link={item.link}
        />
        ))}
        </div>
        <About />
    </div>
  )
}
