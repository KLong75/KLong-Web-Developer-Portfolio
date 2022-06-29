import React, { useState } from 'react';
import Header from './components/Header';
//import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
//import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {

  const [contactSelected, setContactSelected] = useState(false);
  

  return (
    <div className=''>
      <Header
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Header>
      <main className=''>
        {!contactSelected ? (
          <>
           <About></About>
           <Portfolio></Portfolio>
          </>
        ) : (
           <Contact></Contact>
        )}
      </main>  
      <Footer></Footer>
    </div>
  );
}
export default App;
