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
  title: string,
  content: string,
  image1: string,
  image2: string
}

  const Tabs = (): JSX.Element => {
    const [currentTab, setCurrentTab] = useState('1');

      const tabs: ITabs[] = [
          {
              id: '1',
              tabTitle: 'Bathroom',
              title: 'Title 1',
              content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.',
              image1: img1,
              image2: img2
          },
          {
              id: '2',
              tabTitle: 'Bedroom',
              title: 'Title 2',
              content: 'Contenido de tab 2.',
              image1: img3,
              image2: img4
          },
          {
              id: '3',
              tabTitle: 'Kitchen',
              title: 'Title 3',
              content: 'Contenido de tab 3.',
              image1: img5,
              image2: img6
          },
          {
              id: '4',
              tabTitle: 'Living Area',
              title: 'Title 4',
              content: 'Contenido de tab 4.',
              image1: img7,
              image2: img8
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
                        onClick={(handleTabClick)}
                        className={currentTab === `${tab.id}` ? `${s.active}` : ''}
                    >
                        {tab.tabTitle}
                    </button>
                  )}
              </div>
              <div className='content'>
                  {tabs.map((tab, i) =>
                      <div key={i}>
                        {
                        currentTab === `${tab.id}` &&

                            <div className={s.images}>
                                <div className={s.images__image1}>
                                    <img src={tab.image1} alt="img 1" />
                                </div>
                                <div className={s.images__image1}>
                                    <img src={tab.image2} alt="img 2" />
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
