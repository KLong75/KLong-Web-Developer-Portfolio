import React from 'react';
// import aboutImage from '../../assets/about-image.png';
// import roosterCostume from '../../assets/Kevin_rooster_costume.jpg';
import kevHuck from '../../assets/kev-huck.jpg';


const About = () => {
  return (
    <>
      <h2 
        className='section-title'>&lt; About Me /&gt;
      </h2>
      <p className='section-sub-title'>&lt; From puppeteer to programmer... /&gt;</p>
      <section className='container' id='about-me-section'>
        <div className='row' id='about-me-row'>
          <div className='col-lg-4 col-md-6 col-sm-12' id='about-me-pic-div'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' >
                {/* <img src={aboutImage} alt='Kevin and dog' className='card-img'/> */}
                <img src={kevHuck} className='card-img img-top' alt='Kevin with his dog, Huck' />
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card shadow-lg' id='about-me-card'>
              <div className='card-body' id='about-me-card-body'>
                <p 
                  id='about-me-text'>
                  My path to coding has been conventional only in its unconventionality. I have a Bachelor of Arts in Theater and worked as a theater artist specializing in puppetry for many years.
                  Making a living as an artist is a challenge. As one gets older priorities change. A desire for more stable employment led me to become a certified elementary school teacher. Teaching virtually due to the pandemic sparked an interest in computers and technology. I became curious about how all of the internet tools I was using to teach actually worked and decided to find out.   
                  <hr></hr>
                  Like puppetry, coding is a highly collaborative, creative process that requires creative problem solving to reach a common goal. Both require a focused group of people working together to build something within a budget by a deadline. The tools and materials are just different.
                  <hr></hr>
                  I love to make things. I thrive on creative collaboration and problem solving. I am interested in full time employment, freelance gigs, and other collaborative opportunities. Let's build something great.
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