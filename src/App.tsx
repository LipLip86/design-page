import React from 'react';
import './App'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { About } from './pages/about';
import Navbar from "./components/widgets/navbar/Navbar";
import Footer from './components/widgets/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
  </>
  )
}

export default App;
