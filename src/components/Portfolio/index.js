import React from "react";
import Project from '../Project';

const Portfolio = () => {
  return (
    <section className=''>
      <h2 className='section-title'>&lt; My Portfolio /&gt;</h2>
      <p className='section-sub-title'>&lt; Click on a pic to check out the deployed app. /&gt;</p>
      <Project />
    </section>
  );
};

export default Portfolio;