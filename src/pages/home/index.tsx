import React from "react";
import Navbar from '../../components/navbar/Navbar';
import s from './index.module.css';
import Banner from '../../components/banner/Banner';
import Subcontent from '../../components/subcontent/Subcontent';
import { cardsConfig } from '../../configs/cardsconfig';
import About from '../../components/about/About';
import Testimonial from "../../components/testimonial/Testimonial";
import Clients from '../../components/clients/Clients';
import photo from '../../assets/Photoreview1.jpg';
import Projects from '../../components/projects/Projects';
import Counter from "../../components/counter/Counter";
import Blog from "../../components/blog/Blog";
import Contacts from "../../components/contacts/Contacts";

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

const cardData = {
  name: "Nattasha Mith",
  location: "Sydney, USA",
  text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  image: photo
}

export const Home = () => {
  return (
    <div className={s.container}>
      <Navbar />
        <Banner />
        <div className={s.container__subcontent}>
        {
          cardsConfig.map((item: ICard) => (
            <Subcontent
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))
        }
        </div>
        <About />
        <div className={s.container_review}>
          <h2>What People Think<br></br>
            About Us
          </h2>
          <div className={s.cards}>

            <Testimonial
              name={cardData.name}
              text={cardData.text}
              location={cardData.location}
              photo={cardData.image}
            />

            <Testimonial
              name={cardData.name}
              text={cardData.text}
              location={cardData.location}
              photo={cardData.image}
            />

            <Testimonial
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
