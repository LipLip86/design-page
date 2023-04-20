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

interface ITabs {
  id: string,
  tabTitle: string,
  viewsLeft?: any,
  viewsRight?: any
}

  const Tabs = (): JSX.Element => {
    const [currentTab, setCurrentTab] = useState('1');

      const tabs: ITabs[] = [
          {
              id: '1',
              tabTitle: 'Bathroom',
              viewsLeft: [
                {
                  title: 'Minimal Bedroom',
                  content: 'Decor / Architecture',
                  image: img1,
                },
                {
                  title: 'Classic Minimal Bedroom',
                  content: 'Decor / Architecture',
                  image: img3,
                },
                {
                  title: 'Minimal Bedroom Table',
                  content: 'Decor / Architecture',
                  image: img5,
                },
                {
                  title: 'Modern Bedroom',
                  content: 'Decor / Architecture',
                  image: img7,
                }
              ],
              viewsRight: [
                {
                  title: 'Minimal Bedroom',
                  content: 'Decor / Architecture',
                  image: img2,
                },
                {
                  title: 'Classic Minimal Bedroom',
                  content: 'Decor / Architecture',
                  image: img4,
                },
                {
                  title: 'Minimal Bedroom Table',
                  content: 'Decor / Architecture',
                  image: img6,
                },
                {
                  title: 'Modern Bedroom',
                  content: 'Decor / Architecture',
                  image: img8,
                }
              ]
          },
          {
            id: '2',
            tabTitle: 'Bedroom',
            viewsLeft: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img1,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img3,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img5,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img7,
              }
            ],
            viewsRight: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img2,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img4,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img6,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img8,
              }
            ]
          },
          {
            id: '3',
            tabTitle: 'Kitchen',
            viewsLeft: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img1,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img3,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img5,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img7,
              }
            ],
            viewsRight: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img2,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img4,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img6,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img8,
              }
            ]
          },
          {
            id: '4',
            tabTitle: 'Living Area',
            viewsLeft: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img1,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img3,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img5,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img7,
              }
            ],
            viewsRight: [
              {
                title: 'Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img2,
              },
              {
                title: 'Classic Minimal Bedroom',
                content: 'Decor / Architecture',
                image: img4,
              },
              {
                title: 'Minimal Bedroom Table',
                content: 'Decor / Architecture',
                image: img6,
              },
              {
                title: 'Modern Bedroom',
                content: 'Decor / Architecture',
                image: img8,
              }
            ]
          },
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
                  {
                    tabs.map((tab: any) => 
                      <div key={tab.id} className={s.images}>
                      <div className={s.images__left}>
                        {
                          currentTab === `${tab.id}` &&
                            tab.viewsLeft.map((view: any, ind: number) =>
                            <>
                                <div key={ind} className={s.images__image1}>
                                  <img src={view.image} alt="img 1" />
                                </div>
                                <div className={s.text}>
                                  <h3> { view.title } </h3>
                                  <p> { view.content } </p>
                                </div>
                            </>
                            )
                        }
                      </div>
                      <div className={s.images__right}>
                        {
                          currentTab === `${tab.id}` &&    
                              tab.viewsRight.map((view: any) =>
                              <>
                                <div className={s.images__image2}>
                                  <img src={view.image} alt="img 2" />
                                </div>
                                <div className={s.text}>
                                  <h3> { view.title } </h3>
                                  <p> { view.content} </p>
                                </div>
                                 </>
                              )
                        }
                          </div>
                      </div>
                    )
                  }
              </div>
          </div>
      );
  }

  export default Tabs;
