import React from "react";
import s from "./index.module.css";
import { Contacts, StageCard, Work } from "../../components";
import { servicesCardsConfig } from "../../mocks/ServiceCardMocks/servicesCardsConfig";
import bannerImage from "../../assets/banners/Photo_service.jpg";
import { BannerTop } from "../../components/widgets";

interface ICard {
  id: number;
  title: string;
  text: string;
  link: string;
}

const bannerTopData = {
  img: bannerImage,
  title: "About Us",
  subtitle: "Home / About Us",
};

const Services = () => {
  return (
    <>
      <BannerTop
        img={bannerTopData.img}
        title={bannerTopData.title}
        subtitle={bannerTopData.subtitle}
      />
      <div className={s.container}>
        <div className={s.subcontent}>
          {servicesCardsConfig.map((item: ICard) => (
            <StageCard
              key={item.id}
              title={item.title}
              text={item.text}
              link={item.link}
              className={s.hover}
            />
          ))}
        </div>
        <Work />
        <Contacts />
      </div>
    </>
  );
};

export default Services;
