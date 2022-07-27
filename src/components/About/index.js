import React from 'react';
// import aboutImage from '../../assets/about-image.png';
import roosterCostume from '../../assets/Kevin_rooster_costume.jpg';
const About = () => {
  return (
    <>
      <h2 
        className='section-title'>&lt; About Me /&gt;
      </h2>
      <p className='section-sub-title'>&lt; From puppeteer to programmer... /&gt;</p>
      <section className='container shadow-lg' id='about-me-section'>
        <div className='row' id='about-me-row'>
          <div className='col-lg-4 col-md-6 col-sm-12' id='about-me-pic-div'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' >
                {/* <img src={aboutImage} alt='Kevin and dog' className='card-img'/> */}
                <img src={roosterCostume} className='card-img img-top' alt='Kevin in a rooster puppet costume' />
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' id='about-me-card-body'>
                <p 
                  id='about-me-text'>
                  Full Stack Web Developer. Graduated from the full stack web development bootcamp at the University of Texas in July of 2022. Currently seeking full time employment in web development. Also interested in freelance gigs and collaboration. I have a bachelor of arts in theater and pursued a career in puppetry for several years. At first glance coding may seem quite different from puppetry, however both are highly collaborative creative processes that revolve around creative problem solving in an effort to reach a common goal. Both endeavors require a focused group of people working together to build something great. The tools and building materials just happen to be different. I thrive on creative problem solving and collaboration. I am beyond excited for my coding journey. I see coding not only as a path to gainful and meaningful employment but also as a way to further my creative pursuits and make positive contributions to the local and global communities.
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