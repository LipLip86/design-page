import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/widgets/Header/Header";
import Footer from './components/widgets/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import s from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={s.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
  </>
  )
}

export default App;
