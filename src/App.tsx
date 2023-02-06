import React, { Component } from 'react';
import Navbar from './components/Navbar'
import s from './index.module.css'

function App() {
    return (
      <>
      <div className={s.container}>
        <Navbar />
        </div>
    </>
    )
}

export default App;
