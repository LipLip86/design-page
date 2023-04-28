import React from "react";
import { HomeBanner, StageCard, AboutUs, TestimonialCard, Clients, Projects, Counter, Blog, Contacts } from '../../components/index';
import { cardsConfig } from '../../configs/cardsconfig';
import photo from '../../assets/Photoreview1.jpg';
import img1 from "../../assets/blog_ph1.jpg";
import img2 from "../../assets/blog_ph2.jpg";
import img3 from "../../assets/blog_ph3.jpg";
import arrow from "../../assets/arrow.svg";
import s from './index.module.css';
import CommonCards from "../../components/CommonCard/CommonCard";
import { ICommonCard } from "../../utils/types";

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

  const post: ICommonCard [] = [
    {
      imgUrl: img1,
      span: "Kitchen Design",
      text: "Low Cost Latest Invented Interior Designing Ideas",
      date: "13 December,2022",
      button: arrow
    },
    {
      imgUrl: img2,
      span: "Living Design",
      text: "Let's Get Solution For Building Construction Work",
      date: "21 December,2022",
      button: arrow
    },
    {
      imgUrl: img3,
      span: "Interior Design",
      text: "Best For Any Office & Business Interior Solution",
      date: "29 December,2022",
      button: arrow
    }
  ]

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
      <div className={s.container_text}>
        <h2>Articles & News</h2>
        <p>It is a long established fact that a reader will be distracted by the of readable content
          of a page when lookings at its layouts the points of using.</p>
      </div>
      <CommonCards posts={post}/>
      <Contacts />
    </div>
  )
}

export default Home;
