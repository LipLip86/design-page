import React from "react";
import s from './index.module.css';
import { BannerTop } from "../../components/widgets";
import img1 from '../../assets/blog_ph.jpg'
import { BaseArrow } from "../../components/ui";
import arrow from '../../assets/arrow.svg'
import Post from "../../components/post/Post";
import Blg from "../../components/Blog/Blog";

const Blog = () => {
  return (
    <div>
      <BannerTop
        img={img1}
        title="Articles / News"
        subtitle="Home / Blog"
      />
      <Post />
      <Blg />
      <div className={s.pages}>
      <BaseArrow colorBg='#F4F0EC'> 01 </BaseArrow>
      <BaseArrow colorBg='#F4F0EC'> 02 </BaseArrow>
      <BaseArrow colorBg='#F4F0EC'> 03 </BaseArrow>
      <BaseArrow img={arrow} colorBg='#F4F0EC' />
      </div>
    </div>
  )
}

export default Blog;
