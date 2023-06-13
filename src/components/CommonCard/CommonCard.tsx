import React from "react";
import s from "./styles.module.css";
import { ICommonCard } from "../../utils/types";
import { BaseArrow } from "../ui";

interface IProps {
  posts: ICommonCard[];
}

const CommonCards = (props: IProps): JSX.Element => {
  const { posts } = props;
  return (
    <div className={s.container_main}>
      <div className={s.container_pictures}>
        {posts.map((post: ICommonCard) => {
          return (
            <div key={post.id} className={s.container_card}>
              <div className={s.card_top}>
                <img src={post.imgUrl} alt="project" />
                <span>{post.span}</span>
              </div>
              <div className={s.card_middle}>
                <h3>{post.text}</h3>
              </div>
              <div className={s.card_bottom}>
                <p>{post.date}</p>
                <BaseArrow imgUrl={post.button} colorBg="#F4F0EC" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonCards;
