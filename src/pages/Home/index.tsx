import React from "react";
import { HomeBanner, StageCard, AboutUs, TestimonialCard, Clients, Projects, Counter, Blog, Contacts } from '../../components/index';
import { cardsConfig } from '../../configs/cardsconfig';
import photo from '../../assets/Photoreview1.jpg';

import s from './index.module.css';

interface ICard {
  title: string,
  text: string,
  link: string
}

const cardData = {
  name: "Nattasha Mith",
  location: "Sydney, USA",
  text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  image: photo
}

const Home = () => {
  return (
    <div className={s.container}>
      <HomeBanner />
      <div className={s.subcontent}>
      {
        cardsConfig.map((item: ICard) => (
          <StageCard
            key={item.title}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))
      }
      </div>
      <AboutUs />
      <div className={s.container_review}>
        <h2>What People Think<br></br>
          About Us
        </h2>
        <div className={s.cards}>

          <TestimonialCard
            name={cardData.name}
            text={cardData.text}
            location={cardData.location}
            photo={cardData.image}
          />

          <TestimonialCard
            name={cardData.name}
            text={cardData.text}
            location={cardData.location}
            photo={cardData.image}
          />

          <TestimonialCard
            name={cardData.name}
            text={cardData.text}
            location={cardData.location}
            photo={cardData.image}
          />

        </div>
      </div>
      <Clients />
      <Projects />
      <Counter />
      <Blog />
      <Contacts />
    </div>
  )
}

export default Home;
