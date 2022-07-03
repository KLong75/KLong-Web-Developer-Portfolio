import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href='mailto:kevinjlong75@gmail.com'>   
        <i id='footer-icon' className='fas fa-envelope fa-3x'></i>
      </a>
      <a href='https://github.com/KLong75' target='_blank' rel='noreferrer' className=''>
        <i id='footer-icon' className='fab fa-github fa-3x'></i>
      </a>
      <a href='https://www.linkedin.com/in/klong75' target='_blank' rel='noreferrer' className=''>
        <i id='footer-icon' className='fab fa-linkedin fa-3x'></i>
      </a>
      <a href='https://stackoverflow.com/users/18041189/klong75?tab=profile' target='_blank' rel='noreferrer' className=''>
        <i id='footer-icon' className='fab fa-stack-overflow fa-3x'></i>
      </a>
      <p id='footer-tag-text' className='section-sub-title'>&lt; Let's build something great. /&gt;</p>
    </footer>
  );
};

export default Footer;