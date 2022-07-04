import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='mailto:kevinjlong75@gmail.com'>
        <FaEnvelope id='footer-icon' size={30} />   
      </a>
      <a href='https://github.com/KLong75' target='_blank' rel='noreferrer' className=''>
        <FaGithub id='footer-icon' size={30}/>
      </a>
      <a href='https://www.linkedin.com/in/klong75' target='_blank' rel='noreferrer' className=''>
        <FaLinkedin id='footer-icon' size={30} />
      </a>
      <a href='https://stackoverflow.com/users/18041189/klong75?tab=profile' target='_blank' rel='noreferrer' className=''>
        <FaStackOverflow id='footer-icon' size={30} />
      </a>
      <p id='footer-tag-text' className='section-sub-title'>&lt; Let's build something great. /&gt;</p>
    </footer>
  );
};

export default Footer;