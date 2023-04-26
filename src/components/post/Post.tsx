import React from 'react'
import s from './styles.module.css'
import photo from '../../assets/blog_photo2.jpg'
import { BaseArrow } from '../ui'
import arrow from '../../assets/arrow.svg'

const Post: any= () => {
  return (
    <div className={s.postContainer}>
      <h2>Latest Post</h2>
        <div className={s.postBlock}>
        <img src={photo} alt='' />
          <div className={s.postText}>
            <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu sem vitae turpis dignissim maximus.posuere
              in. Contrary to popular belief.<br></br>
              Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
              <div className={s.postText__bottom}>
                  <p>26 December,2022</p>
                  <BaseArrow imgUrl={arrow} colorBg='#F4F0EC' />
              </div>
        </div>

          </div>
    </div>
  )
}

export default Post;
