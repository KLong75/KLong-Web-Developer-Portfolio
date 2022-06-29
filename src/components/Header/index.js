import React from 'react';
import Nav from '../Nav';

const Header = (props) => {

  return (
    
    <header className='header'>
      <h1>&lt;  Kevin Long  |  Full Stack Web Developer /&gt;</h1>
      <Nav setCurrentPage={props.setCurrentPage} />
    </header>
    
  );
}

export default Header;