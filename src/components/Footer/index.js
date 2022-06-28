import React from 'react';
import gitHubLogo from '../../assets/GitHub-Mark-64px.png';
import linkedInLogo from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className=''>
      <a href='https://github.com/KLong75' target='_blank' rel='noreferrer' className=''>
        <img src={gitHubLogo} alt='GitHub icon' className='footer-icon'></img>
      </a>
      <a href='https://www.linkedin.com/in/klong75' target='_blank' rel='noreferrer' className=''>
        <img src={linkedInLogo} alt='LinkedIn icon' className='footer-icon'></img>
      </a>

    </footer>
  );
};

export default Footer;