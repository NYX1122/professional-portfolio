import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app-div'>
      <Header></Header>
      <Portfolio></Portfolio>
      {/* <About></About> */}
      <Footer></Footer>
    </div>
  );
}

export default App;