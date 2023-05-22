import React, { useState } from "react";
import s from "./styles.module.css";
import { tabs } from "../../utils/constants";

const Tabs = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.id);
  };

  return (
    <div className={s.container}>
      <div className={s.tabs}>
        {tabs.map(tab => (
          <button
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className={currentTab === `${tab.id}` ? `${s.active}` : ""}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={s.content}>
        {tabs.map((tab: any) => (
          <div className={s.images}>
            <div className={s.images__left}>
              {currentTab === `${tab.id}` &&
                tab.viewsLeft.map((view: any, ind: number) => (
                  <>
                    <div className={s.images__image1}>
                      <img src={view.image} alt="img 1" />
                    </div>
                    <div className={s.text}>
                      <h3> {view.title} </h3>
                      <p> {view.content} </p>
                    </div>
                  </>
                ))}
            </div>
            <div className={s.images__right}>
              {currentTab === `${tab.id}` &&
                tab.viewsRight.map((view: any, ind: number) => (
                  <>
                    <div className={s.images__image2}>
                      <img src={view.image} alt="img 2" />
                    </div>
                    <div className={s.text}>
                      <h3> {view.title} </h3>
                      <p> {view.content} </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
