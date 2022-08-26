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
                  My path to coding has been conventional only in its unconventionality. I have a Bachelor of Arts in Theater and have worked as a theater artist specializing in puppetry for over 20 years. A life in puppetry has been a wonderful adventure full of interesting people and exciting projects. I would not trade it for anything. 

                  Making a living as an artist is a challenge. As one gets older priorities change. A desire for more stable employment led me to become a certified elementary school teacher. Teaching virtually due to the pandemic deepened my interest in computers and technology. I became curious about how all of the internet tools we were using actually worked and decided to find out.  

                  I graduated from the full stack web development bootcamp at The University of Texas in July of 2022. 
<hr></hr>
                  At first glance coding may seem quite different from puppetry, however both are highly collaborative, creative processes that require creative problem solving to reach a common goal by a deadline. Both require a focused group of people working together to build something great. The tools and materials are just different.
                  <hr></hr>
                  A career in the arts has often necessitated a day job. As such I have a wide array of work experiences in a variety of industries including retail, food service, agriculture, manufacturing, childcare, and education. I have experienced technology in the workplace as both an asset and an obstacle. My diverse work background informs my thinking as a developer resulting in applications that are effective, intuitive, and easy to use. 
                  <hr></hr>
                  Let's build something great.
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