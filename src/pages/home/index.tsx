import React from "react";
import Navbar from '../../components/navbar/Navbar'
import s from './index.module.css'
import Banner from '../../components/banner/Banner'
import Subcontent from '../../components/subcontent/Subcontent'
import { cardsConfig } from '../../configs/cardsconfig';
import About from '../../components/about/About'
import Testimonial from "../../components/testimonial/Testimonial";
import { reviewConfig } from '../../configs/reviewconfig';
import Clients from '../../components/clients/Clients'

interface ICard {
  title: string,
  text: string,
  link: string
}

interface IReview {
  name: string,
  location: string,
  text: string
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
        <div className={s.container_review}>
          <h2>What People Think<br></br>
            About Us</h2>
          <div className={s.cards}>
          {reviewConfig.map((item: IReview)=> (
            <Testimonial
                name={item.name}
                location={item.location}
                text={item.text}/>
          ))
          }
          </div>
        </div>
        <Clients />
    </div>
  )
}
