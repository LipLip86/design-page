import React from "react";
import s from './index.module.css';
import { BannerTop } from "../../components/widgets";
import imgbg from '../../assets/blog_ph.jpg'
import { BaseArrow } from "../../components/ui";
import arrow from '../../assets/arrow.svg'
import Post from "../../components/post/Post";
import CommonCards from "../../components/CommonCard/CommonCard";
import img1 from "../../assets/blog_ph1.jpg";
import img2 from "../../assets/blog_ph2.jpg";
import img3 from "../../assets/blog_ph3.jpg";

interface ICommonCard {
  id: number,
  imgUrl: string,
  span: string,
  text: string,
  date: string,
  button: string
}

  const post: ICommonCard [] = [
    {
      id: 1,
      imgUrl: img1,
      span: "Kitchen Design",
      text: "Low Cost Latest Invented Interior Designing Ideas",
      date: "13 December,2022",
      button: arrow
    },
    {
      id: 2,
      imgUrl: img2,
      span: "Living Design",
      text: "Let's Get Solution For Building Construction Work",
      date: "21 December,2022",
      button: arrow
    },
    {
      id: 3,
      imgUrl: img3,
      span: "Interior Design",
      text: "Best For Any Office & Business Interior Solution",
      date: "29 December,2022",
      button: arrow
    },
    {
      id: 4,
      imgUrl: img1,
      span: "Kitchen Design",
      text: "Low Cost Latest Invented Interior Designing Ideas",
      date: "13 December,2022",
      button: arrow
    },
    {
      id: 5,
      imgUrl: img2,
      span: "Living Design",
      text: "Let's Get Solution For Building Construction Work",
      date: "21 December,2022",
      button: arrow
    },
    {
      id: 6,
      imgUrl: img3,
      span: "Interior Design",
      text: "Best For Any Office & Business Interior Solution",
      date: "29 December,2022",
      button: arrow
    }
  ]

const Blog = () => {
  return (
    <div>
      <BannerTop
        img={imgbg}
        title="Articles / News"
        subtitle="Home / Blog"
      />
      <Post />
      <div className={s.container_text}>
        <h2>Articles & News</h2>
      </div>
      <CommonCards posts={post}/>
      <div className={s.pages}>
      <BaseArrow colorBg='#F4F0EC'> 01 </BaseArrow>
      <BaseArrow colorBg='#F4F0EC'> 02 </BaseArrow>
      <BaseArrow colorBg='#F4F0EC'> 03 </BaseArrow>
      <BaseArrow imgUrl={arrow} colorBg='#F4F0EC' />
      </div>
    </div>
  )
}

export default Blog;
