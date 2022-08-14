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
                  Full Stack Web Developer. Bachelor of arts in theater. Have worked as a theater artist specializing in puppetry for over 20 years. At first glance coding may seem quite different from theater, however both are highly collaborative creative processes that require creative problem solving to reach a common goal by a deadline. Both require a focused group of people working together to build something. The tools and materials are just different. A career in the arts has often necessitated a day job. Extensive work experience in a variety of roles and industries including retail, food service, agriculture, manufacturing, and education. Have experienced technology in the workplace as both an asset and an obstacle. All of this real world experience informs thinking as a developer resulting in applications that are effective, intuitive, and easy to use. Adapts to new information and evolving circumstances. Excellent communication skills. Skilled at organizing and motivating groups of people to achieve a goal. Welcomes feedback. Always actively working to grow and improve. Thrives on creative problem solving and collaboration. Experienced at meeting deadlines under pressure.
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