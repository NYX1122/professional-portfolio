import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selected, setSelected] = useState('about');

  return (
    <div className='app-div'>
      <Header selected={selected} setSelected={setSelected}></Header>
      {(selected === 'about') ? 
        <About></About>
      : (selected === 'portfolio') ?
        <Portfolio></Portfolio>
      : (selected === 'contact') ?
        <Contact></Contact>
      : (selected === 'resume') &&
        <Resume></Resume>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;