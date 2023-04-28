import React from 'react';
import s from './index.module.css';
import { BannerTop } from '../../components/widgets';
import img1 from '../../assets/contacts_ph.jpg'

const Contact = () => {
  return (
    <div>
      <BannerTop
      img={img1}
        title="Contact Us"
        subtitle="Home / Contact"/>
    </div>
  )
}

export default Contact;
