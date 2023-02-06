import React, { Component } from 'react';
import Navbar from './components/Navbar'
import s from './index.module.css'
import Banner from './components/Banner'

function App() {
    return (
      <>
      <div className={s.container}>
        <Navbar />
        <Banner />
        </div>

    </>
    )
}

export default App;
