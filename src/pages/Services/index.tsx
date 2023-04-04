import React from "react";
import s from './index.module.css';
import ServiceBanner from "../../components/service_banner/ServiceBanner";
import { Contacts } from "../../components";

const Services = () => {
  return (
    <div>
      <ServiceBanner />
      <Contacts />
    </div>
  )
}

export default Services;
