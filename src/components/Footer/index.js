import React from 'react';
import gitHubLogo from '../../assets/GitHub-Mark-64px.png';
import linkedInLogo from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer>
      <img src={gitHubLogo} alt='GitHub icon' class='footer-icon'></img>
      <img src={linkedInLogo} alt='LinkedIn icon' class='footer-icon'></img>

    </footer>
  );
};

export default Footer;