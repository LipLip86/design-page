import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import s from './index.module.css'
import Banner from './components/banner/Banner'
import Subcontent from './components/subcontent/Subcontent'
import { cardsConfig } from './configs/cardsconfig';

function App() {
    return (
      <>
      <div className={s.container}>
        <Navbar />
        <Banner />
        <div className={s.container__subcontent}>
        {cardsConfig.map((item)=> (
        <Subcontent
          title={item.title}
          text={item.text}
          button={item.button}
        />
        ))}
        </div>
        </div>

    </>
    )
}

export default App;
