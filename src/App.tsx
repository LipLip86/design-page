import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import s from './index.module.css'
import style from './App'

function App() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </>
    )
}

export default App;
