import React from "react";
import {
  HomeBanner,
  StageCard,
  AboutUs,
  TestimonialCard,
  Clients,
  Projects,
  Counter,
  Contacts,
  CommonCard,
} from "../../components/index";
import { stageCards, testimonialCards, posts } from "../../mocks/HomePageMocks";
import { IStageCard } from "../../utils/types";

import s from "./styles.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <HomeBanner />
      <div className={s.subcontent}>
        {stageCards.map((item: IStageCard) => (
          <StageCard key={item.title} title={item.title} text={item.text} link={item.link} />
        ))}
      </div>
      <AboutUs />
      <div className={s.container_review}>
        <h2 className={s.container_review__title}>
          What People Think
          <br />
          About Us
        </h2>
        <div className={s.cards}>
          {testimonialCards.map((testimonialCard) => (
            <TestimonialCard
              key={testimonialCard.id}
              name={testimonialCard.name}
              text={testimonialCard.text}
              location={testimonialCard.location}
              photo={testimonialCard.image}
            />
          ))}
        </div>
      </div>
      <Clients />
      <Projects />
      <Counter />
      <div className={s.articles}>
        <h2 className={s.articles__title}>Articles & News</h2>
        <p className={s.articles__subtitle}>
          It is a long established fact that a reader will be distracted by the of readable content
          of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <CommonCard posts={posts} />
      <Contacts />
    </div>
  );
};

export default Home;
