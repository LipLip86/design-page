import React, { useState } from 'react';
import s from './styles.module.css'

import img1 from '../../assets/bedroom.jpg'
import img2 from '../../assets/bedroom2.jpg'

import img3 from '../../assets/bedroom3.jpg'
import img4 from '../../assets/bedroom4.jpg'

import img5 from '../../assets/bedroom5.jpg'
import img6 from '../../assets/bedroom6.jpg'

import img7 from '../../assets/bedroom7.jpg'
import img8 from '../../assets/bedroom8.jpg'
import { BaseButton } from '../ui';

interface ITabs {
  id: string,
  tabTitle: string,
  view?: any,
  viewTwo?: any,
  viewThree?: any,
  viewFour?: any,
  viewFive?: object,
  title?: string,
  content?: string,
  image1?: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  image6?: string,
  image7?: string,
  image8?: string
}

  const Tabs = (): JSX.Element => {
    const [currentTab, setCurrentTab] = useState('1');

      const tabs: ITabs[] = [
          {
              id: '1',
              tabTitle: 'Bedroom',
              view: {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image1: img1,
              },
              viewTwo: {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image2: img2,
              },
              viewThree: {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image3: img3,
              },
              viewFour: {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image4: img4,
              },
              viewFive: {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image5: img5,
              },
              image6: img6,
              image7: img7,
              image8: img8
          },
          {
              id: '2',
              tabTitle: 'Bathroom',
              title: 'Minimal Bathroom',
              content: 'Decor / Architecture',
              image1: img4,
              image2: img6,
              image3: img3,
              image4: img4,
              image5: img4,
              image6: img2,
              image7: img7,
              image8: img8
          },
          {
              id: '3',
              tabTitle: 'Kitchen',
              title: 'Minimal Kitchen',
              content: 'Decor / Architecture',
              image1: img1,
              image2: img2,
              image3: img3,
              image4: img4,
              image5: img5,
              image6: img6,
              image7: img7,
              image8: img8
          },
          {
              id: '4',
              tabTitle: 'Living Area',
              title: 'Minimal Living Area',
              content: 'Decor / Architecture',
              image1: img5,
              image2: img2,
              image3: img3,
              image4: img4,
              image5: img1,
              image6: img6,
              image7: img7,
              image8: img8
          }
      ];

      const handleTabClick = (event: any) => {
          setCurrentTab(event.target.id);
      }

      return (
          <div className={s.container}>
              <div className={s.tabs}>
                  {tabs.map((tab, i) =>
                    <button
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={handleTabClick}
                        className={currentTab === `${tab.id}` ? `${s.active}` : ''}
                    >
                        {tab.tabTitle}
                    </button>
                  )}
              </div>
              <div className={s.content}>
                  {tabs.map((tab, i) =>
                      <div key={i}>
                        {
                        currentTab === `${tab.id}` &&

                            <div className={s.images}>
                              {/* {tabs.map((view) =>
                              <div key={i}}> */}

                              <div className={s.images__left}>
                                <div className={s.images__image1}>
                                    <img src={tab.image1} alt="img 1" />
                                </div>
                                <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                <div className={s.images__image2}>
                                    <img src={tab.image3} alt="img 3" />
                                    </div>
                                    <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                  <div className={s.images__image1}>
                                  <img src={tab.image5} alt="img 5" />
                                  </div>
                                  <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                  <div className={s.images__image2}>
                                    <img src={tab.image7} alt="img 7" />
                                    </div>
                                <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                </div>


                                <div className={s.images__right}>
                                <div className={s.images__image2}>
                                    <img src={tab.image2} alt="img 2" />
                                    </div>
                                    <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>

                                <div className={s.images__image1}>
                                    <img src={tab.image4} alt="img 4" />
                                </div>
                                  <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                  <div className={s.images__image2}>
                                    <img src={tab.image6} alt="img 6" />
                                    </div>
                                    <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                  <div className={s.images__image2}>
                                    <img src={tab.image8} alt="img 8" />
                                    </div>
                                    <div className={s.text}>
                                    <h3> { tab.title }
                                  </h3>
                                  <p> { tab.content} </p>
                                  </div>
                                </div>

                            </div>


                        }
                      </div>
                  )}
              </div>
          </div>
      );
  }

  export default Tabs;
