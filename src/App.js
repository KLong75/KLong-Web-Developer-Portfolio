import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {

  const [currentPage, setCurrentPage] = useState('About');

  const renderView = () => {
    if (currentPage === 'About') {
      return <About />
    } else if (currentPage === 'Portfolio') {
      return <Portfolio />
    } else if (currentPage === 'Contact') {
      return <Contact />
    } else if (currentPage === 'Resume') {
      return <Resume />
    }
  }

  return (
    <div id='app-container'>
      <Header 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <main className=''>
       { renderView() }
      </main>  
      <Footer className=''></Footer>
    </div>
  );
}
export default App;
