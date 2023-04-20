import React from "react";
import s from './index.module.css';
import { BannerTop } from "../../components/widgets";
import img1 from '../../assets/blog_ph.jpg'
import { BaseArrow } from "../../components/ui";
import arrow from '../../assets/arrow.svg'

const Blog = () => {
  return (
    <div>
      <BannerTop
        img={img1}
        title="Articles / News"
        subtitle="Home / Blog"
      />
      <BaseArrow img={arrow} colorBg='#F4F0EC' />
      <BaseArrow img={arrow} colorBg='#424791' />
    </div>
  )
}

export default Blog;
