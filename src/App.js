import React from 'react';

import './App.css';

import Navbar from './components/navbars/Navbar';
import HomeAll from './components/home/HomeAll';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeAll/>
      <Footer/>
    </div>
  );
}

export default App;
