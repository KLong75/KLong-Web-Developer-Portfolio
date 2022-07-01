import React, { useState } from "react";
// import pdf from '../../assets/Kevin_Long_Resume.pdf'

const Nav = (props) => {


  const [isActive, setIsActive] = useState('nav-list');
  const [inActive, setInactive] = useState('nav-list');

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive('nav-list navActive');
  };

  

  


  return (
    <nav className=''>
      <ul className='flex-row'>

      {/* <li className={isActive} id='nav-list' onClick={handleClick}>&lt; About /&gt;</li> */}

         <li className={isActive} id='nav-list' onClick={() => { props.setCurrentPage('About'); handleClick();}} >&lt; About /&gt;</li>  
        <li className={isActive} onClick={() => { props.setCurrentPage('Portfolio'); handleClick();}}>&lt; Portfolio /&gt;</li>
        <li className='nav-list' onClick={() => { props.setCurrentPage('Resume')}}>&lt; Resume /&gt;</li>
        <li className='nav-list' onClick={() => { props.setCurrentPage('Contact')}}>&lt; Contact /&gt;</li>
      </ul>
    </nav>
  );
};

export default Nav;