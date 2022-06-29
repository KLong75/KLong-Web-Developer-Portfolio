import React from "react";
import pdf from '../../assets/Kevin_Long_Resume.pdf'

const Nav = (props) => {

  return (
    <nav className=''>
      <ul className='flex-row'>
         <li className='nav-list' onClick={() => { props.setCurrentPage('About')}}>&lt; About /&gt;</li> 
        <li className='nav-list'onClick={() => { props.setCurrentPage('Portfolio')}}>&lt; Portfolio /&gt;</li>
        <a href={pdf} download><li className='nav-list'>&lt; Resume /&gt;</li></a>
        <li className='nav-list' onClick={() => { props.setCurrentPage('Contact')}}>&lt; Contact /&gt;</li>
      </ul>
    </nav>
  );
};

export default Nav;