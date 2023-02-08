import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import s from './index.module.css'

function App() {
    return (
      <>
      <div className={s.container}>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </div>

    </>
    )
}

export default App;
