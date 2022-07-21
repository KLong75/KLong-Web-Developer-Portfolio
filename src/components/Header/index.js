import React from 'react';
import Nav from '../Nav';

const Header = (props) => {

  return (
    
    <header className='header'>
      <h1 className='' id='app-headline-title'>&lt;  Kevin Long  |  Full Stack Web Developer /&gt;</h1>
      <Nav 
        setCurrentPage={props.setCurrentPage} 
        currentPage={props.currentPage}
      />
    </header>
  );
}

export default Header;