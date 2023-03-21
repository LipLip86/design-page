import React from 'react';
import './App'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { About } from './pages/about';
import Navbar from "./components/widgets/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
  </>
  )
}

export default App;
