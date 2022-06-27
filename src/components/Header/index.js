import React from 'react';
import Nav from '../Nav';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Header()  {
  return (
    <header className='flex-row header'>
      <h1>Kevin Long | Full Stack Web Developer</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;