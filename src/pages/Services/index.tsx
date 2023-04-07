import React from "react";
import s from './index.module.css';
import ServiceBanner from "../../components/service_banner/ServiceBanner";
import { Contacts } from "../../components";
import { StageCard } from "../../components";
import { servicesCardsConfig } from "../../configs/servicesCardsConfig";
import { Work } from "../../components";

interface ICard {
  title: string,
  text: string,
  link: string
}

const Services = () => {
  return (
    <>
    <ServiceBanner />
    <div className={s.container}>
      <div className={s.subcontent}>
      {
        servicesCardsConfig.map((item: ICard) => (
          <StageCard
            key={item.title}
            title={item.title}
            text={item.text}
            link={item.link}
            className={s.hover}
          />
        ))
      }
      </div>
        <Work />
        <Contacts />
    </div>
    </>
  )
}

export default Services;
