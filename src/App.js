import React from 'react';
import Header from './components/Header';
//import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
//import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header>
        
      </Header>
      <main>
        
        <About></About>
        <Contact></Contact>
        <Portfolio></Portfolio>
      
      </main>  
      <Footer></Footer>
    </div>
  );
}

export default App;
