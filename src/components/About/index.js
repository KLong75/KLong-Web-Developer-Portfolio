import React from 'react';
import aboutImage from '../../assets/about-image.png';

const About = () => {
  return (
    <>
      <h2 
        className='section-title'>&lt; About Me /&gt;
      </h2>
      <p className='section-sub-title'>&lt; From puppeteer to programmer... /&gt;</p>
      <section className='container shadow-lg'>
        <div className='row' id='about-me-row'>
          <div className='col-4'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' >
                <img src={aboutImage} alt='Kevin and dog' className='card-img'/>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' id='about-me-card-body'>
                <p 
                  id='about-me-text'>
                  Full Stack Web Developer currently enrolled in the full stack web development program at the University of Texas and set to graduate in July of 2022. Upon completion of the program I will be seeking full time employment in web development. I have a bachelor of arts in theater and pursued a career in puppetry for several years. At first glance coding may seem quite different from puppetry, however both are highly collaborative creative processes that revolve around creative problem solving in an effort to reach a common goal. Both endeavors require a focused group of people working together to build something. The tools and building materials just happen to be different. I thrive on creative problem solving and collaboration. I am excited for my coding journey. I see coding not only as a path to gainful and meaningful employment but also as a way to further my creative pursuits and contribute to both the local and global community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;