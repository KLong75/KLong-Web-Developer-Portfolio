import React from 'react';
import pdf from '../../assets/Kevin_Long_Resume.pdf'

//import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props)  {
  const {
    contactSelected, 
    setContactSelected
    
  } = props;



  return (
    
    <header className=''>
      <h1>&lt;  Kevin Long  |  Full Stack Web Developer /&gt;</h1>
      <nav>
        <ul className='flex-row'>
          <li className='nav-list'>&lt; About /&gt;</li>
          
          <li className='nav-list'>
          <span onClick=''>&lt; Portfolio /&gt;
          </span>
          </li>
        <a href={pdf} download><li className='nav-list'>&lt; Resume /&gt;</li></a>

          <li className={`nav-list ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>&lt; Contact /&gt;
            </span>
          </li>

        </ul>
      </nav>       
    </header>
    
  );
}

export default Header;