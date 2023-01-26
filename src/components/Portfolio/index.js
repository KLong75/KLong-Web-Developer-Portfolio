import React from "react";
import Project from '../Project';

const Portfolio = () => {
  return (
    <section className='' id='portfolio-container'>
      <h2 className='section-title'>&lt; My Portfolio /&gt;</h2>
      <p className='section-sub-title hover-instructions'>&lt; Hover over a project for details including links to the deployed application and the GitHub repository. /&gt;</p>
      <Project />
    </section>
  );
};

export default Portfolio;