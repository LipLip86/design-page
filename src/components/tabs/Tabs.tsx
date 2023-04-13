import React, { useState } from 'react';
import s from './styles.module.css'
import img1 from '../../assets/bedroom1.jpg'

// interface ITabs {
//   id: number,
//   tabtTitle: string,
//   title: string,
//   content: string
// }

  const Tabs: any = () => {
    const [currentTab, setCurrentTab] = useState('1');

      const tabs = [
          {
              id: '1',
              tabTitle: 'Bathroom',
              title: 'Title 1',
              content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
          },
          {
              id: '2',
              tabTitle: 'Bedroom',
              title: 'Title 2',
              content: 'Contenido de tab 2.'
          },
          {
              id: '3',
              tabTitle: 'Kitchen',
              title: 'Title 3',
              content: 'Contenido de tab 3.'
          },
          {
              id: '4',
              tabTitle: 'Living Area',
              title: 'Title 4',
              content: 'Contenido de tab 4.'
          }
      ];


      const handleTabClick = (event: any) => {
          setCurrentTab(event.target.id);
      }

      return (
          <div className={s.container}>
              <div className={s.tabs}>
                  {tabs.map((tab, i) =>
                      <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                  )}
              </div>
              <div className='content'>
                  {tabs.map((tab, i) =>
                      <div key={i}>
                          {currentTab === `${tab.id}` &&
                          <div>
                            <p className={s.title}>{tab.title}</p>
                            <p>{tab.content}</p>
                            </div>}
                      </div>
                  )}
              </div>
          </div>
      );
  }

  export default Tabs;
