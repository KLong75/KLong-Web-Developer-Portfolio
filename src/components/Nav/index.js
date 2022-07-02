import React from "react";

const Nav = (props) => {

  return (
    <nav>
      <ul className='flex-row'>
        <li 
          id='nav-list' 
          onClick={() => { props.setCurrentPage('About')}} 
          className={props.currentPage==='About' ? 'navActive' : ''}
          >
          &lt; About /&gt;
        </li>  
        <li 
          id ='nav-list' 
          onClick={() => { props.setCurrentPage('Portfolio')}} 
          className={props.currentPage==='Portfolio' ? 'navActive' : ''}
          >
          &lt; Portfolio /&gt;
        </li>
        <li 
          id='nav-list' 
          onClick={() => { props.setCurrentPage('Resume')}}
          className={props.currentPage==='Resume' ? 'navActive' : ''}
          >
          &lt; Resume /&gt;
        </li>
        <li 
          id='nav-list' 
          onClick={() => { props.setCurrentPage('Contact')}}
          className={props.currentPage==='Contact' ? 'navActive' : ''}
          >
          &lt; Contact /&gt;
        </li>
      </ul>
    </nav>
  );
};

export default Nav;