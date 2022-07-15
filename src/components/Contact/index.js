import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

import Carousel from 'better-react-carousel';
// import whoDoLoginImg from '../../assets/Who_Do_login.png';
import budgetTrackerImg from '../../assets/budget-tracker.png';
// import deepThoughtsImg from '../../assets/deep-thoughts-signup.png';
// import moviesAvengersImg from '../../assets/avengersportfolio.png';
// import noteTakerImg from '../../assets/note-taker2.png';
import workDaySchedulerImg from '../../assets/work-day-scheduler.png';
import whoDoEventFeedImg from '../../assets/who-do-event-feed.png';
import whoDoEventDetailsImg from '../../assets/who-do-event-details.png';
import whoDoCreateEventImg from '../../assets/Who_Do_create_event.png';
import moviesHomeImg from '../../assets/movies-r-us-homepage.png';
import moviesResultsImg from '../../assets/movies-r-us-sci-fi-results.png';
import moviesDetailImg from '../../assets/movies-r-us-dune.png';
import deepToughtsFeedImg from '../../assets/deep-thoughts-feed.png';
import deepThoughtsSingleThoughtImg from '../../assets/deep-thoughts-single-thought.png';
import deepThoughtsUserProfileImg from '../../assets/deep-thoughts-user-profile.png';
import deepThoughtsUserThoughtsImg from '../../assets/deep-thoughts-user-thoughts.png';
import workDaySchedulerImg2 from '../../assets/work-day-img2.png';
import budgetTrackerImg3 from '../../assets/budget-tracker-img3.png';
import budgetTrackerImg2 from '../../assets/budget-tracker-img2.png';


function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('A valid email address is required.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });  
    }
  };
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    
  }

  return (
    <>
      <h2 
        data-testid='contact' className='section-title'>&lt; Contact Me /&gt;
      </h2>
      <p className='section-sub-title'>&lt; Let's build something great. /&gt;</p>
      <section className='container shadow-lg'>
        <div className='row' id='contact-row'>
          <div className='col'>
            <div id='contact-card' className='card shadow-lg'>
              <h4 className='card-title' id='contact-card-title'> 
                <a href='mailto:kevinjlong75@gmail.com'>   
                &lt; kevinjlong75@gmail.com
                </a> | 512-975-0082 /&gt;
              </h4>
              <div id='contact-form-container' className='card-body container'>
                <form id='contact-form' className='contact-form' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-4'>
                      <label id='contact-form-label' htmlFor='name' className=''>Name:</label>
                      <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
        
                      <label id='contact-form-label' htmlFor='email' className=''>Email address:</label>
                      <input type='email' defaultValue={email} onBlur={handleChange} name='email' className='' />
                    </div>

                    <div className='col-8'>
                      <label id='contact-message-label' htmlFor='message'>Message:</label>
                      <textarea name='message' className='' defaultValue={message} onBlur={handleChange} rows='4' />
                    <div>
                      {errorMessage && (
                       <p id='contact-error-text' className='error-text text-danger'>{errorMessage}</p>
                      )}
                    </div>
                      <button type='submit' className='btn btn-secondary' id='contact-form-btn' data-testid='button'>Submit</button>
                    </div>
                  </div>
                </form>  
                <div id='carousel-div'>
                  <Carousel id='carousel' cols={3} rows={1} gap={20} autoplay={5000} loop={true} hideArrow={true} >
                    <Carousel.Item>
                      <img width="100%" src={whoDoCreateEventImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={whoDoEventFeedImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={whoDoEventDetailsImg} alt='screenshot of app'/>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img width="100%" src={moviesHomeImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={moviesResultsImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={moviesDetailImg} alt='screenshot of app'/>
                    </Carousel.Item>
          
                    <Carousel.Item>
                      <img width="100%" src={deepToughtsFeedImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={deepThoughtsSingleThoughtImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={deepThoughtsUserProfileImg} alt='screenshot of app'/>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img width="100%" src={deepThoughtsUserThoughtsImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={workDaySchedulerImg} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={workDaySchedulerImg2} alt='screenshot of app' />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img width="100%" src={budgetTrackerImg2} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={budgetTrackerImg3} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={budgetTrackerImg} alt='screenshot of app' />
                    </Carousel.Item>
                  </Carousel> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;