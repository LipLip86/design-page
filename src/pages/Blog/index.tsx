import React from "react";
import s from './index.module.css';
import { BannerTop } from "../../components/widgets";
import img1 from '../../assets/blog_ph.jpg'

const Blog = () => {
  return (
    <div>
      <BannerTop
      img={img1}
      title="Articles / News"
      subtitle="Home / Blog" />
    </div>
  )
}

export default Blog;
