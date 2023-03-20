import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import './App'
import { About } from './pages/about';

function App() {
    return (
      <>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
    </>
    )
}

export default App;
