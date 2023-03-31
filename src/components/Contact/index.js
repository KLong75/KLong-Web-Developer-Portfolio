// import from React
import React, { useState, useRef } from 'react';

// import email.js
import emailjs from 'emailjs-com';

// import helpers
import { validateEmail } from '../../utils/helpers';

// import carousel
import Carousel from 'better-react-carousel';

// import from react-toastify
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import images
import budgetTrackerImg from '../../assets/budget-tracker.png';
import whoDoEventFeedImg from '../../assets/who-do-event-feed.png';
import whoDoEventDetailsImg from '../../assets/who-do-event-details.png';
import whoDoCreateEventImg from '../../assets/Who_Do_create_event.png';
import moviesHomeImg from '../../assets/movies-r-us-homepage.png';
import moviesResultsImg from '../../assets/movies-r-us-sci-fi-results.png';
import moviesDetailImg from '../../assets/movies-r-us-dune.png';
import deepToughtsFeedImg from '../../assets/deep-thoughts-feed.png';
import deepThoughtsSingleThoughtImg from '../../assets/deep-thoughts-single-thought.png';
import deepThoughtsUserProfileImg from '../../assets/deep-thoughts-user-profile.png';
import budgetTrackerImg3 from '../../assets/budget-tracker-img3.png';
import budgetTrackerImg2 from '../../assets/budget-tracker-img2.png';
import musicology1 from '../../assets/musicology-pro.png';
import musicology2 from '../../assets/musicology-lp.png';
import musicology3 from '../../assets/musicology-bb.png';
import portfolio1 from '../../assets/web_dev_about.png';
import portfolio2 from '../../assets/web_dev_portfolio.png';
import portfolio3 from '../../assets/web_dev_contact.png';
import vm_audio from '../../assets/vm_audio.png';
import vm_radio from '../../assets/vainmain-radio.png';
import vm_video from '../../assets/vm_video.png';
import sht_home_desktop from '../../assets/sht_home_desktop.png';
import sht_services from '../../assets/sht_services.png';
import sht_testimonials from '../../assets/sht_testimonials.png';
import webDevIcon from '../../assets/web_dev_icon-192.png';


const ContactFormToast = ({message, icon}) => (
  <div>
    <img src={webDevIcon } alt="web development icon" style={{width: '50px', height: '50px', borderRadius: '50%', border: '1px solid #212529'}}/>
    <p style={{color: '#212529', fontSize: '20px', marginTop: '10px'}}>{message}</p>
  </div>
)



const Contact = () => {
  
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

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_ojdnvzp', 'template_pfny3q7', form.current, 'sXBZoSzco5PV7qrW2')

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
     
      .then((result) => {
          console.log(result.text);
          // alert('Thank you. Your message has been sent.');
          toast.success(<ContactFormToast message='Thank you. Your message has been sent.' icon={webDevIcon}/>);
      }, (error) => {
          console.log(error.text);
      });
      
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      e.target.reset()
  };
  
  return (
    <>
      <h2 
        data-testid='contact' className='section-title'>&lt; Contact Me /&gt;
      </h2>
      <p className='section-sub-title'>&lt; Let's build something great. /&gt;</p>
      <section className='container' id='contact-container'>
        <div className='row' id='contact-row'>
          <div className='col'>
            <div id='contact-card' className='card shadow-lg'>
              <h4 className='card-title' id='contact-card-title'> 
                <a href='mailto:kevinjlong75@gmail.com'>   
                &lt; kevinjlong75@gmail.com
                </a> | 512-975-0082 /&gt;
              </h4>
              
              <div id='contact-form-container' className='card-body container'>
                <form ref={form} id='contact-form' className='contact-form' onSubmit={sendEmail}>
                  <div className='row'>
                    <div className='col-4'>
                      <label id='contact-form-label'  htmlFor='name' className=''>Name:</label>
                      <input type='text' placeholder='Your name' defaultValue={name} onBlur={handleChange} name='name' required />
        
                      <label id='contact-form-label' htmlFor='email' className=''>Email address:</label>
                      <input type='email' placeholder='Your email address' defaultValue={email} onBlur={handleChange} name='email' className='' required />
                    </div>

                    <div className='col-8'>
                      <label id='contact-message-label' htmlFor='message'>Message:</label>
                      <textarea name='message' placeholder='Your message' className='' defaultValue={message} onBlur={handleChange} rows='4' required/>
                    
                      {errorMessage && (
                       <p id='contact-error-text' className='error-text text-danger'>{errorMessage}</p>
                      )}
                      <button type='submit' className='btn btn-secondary' id='contact-form-btn' data-testid='button'>Submit</button>
                    </div>
                  </div>
                </form>  
                <div id='carousel-div'>
                  <Carousel id='carousel' cols={3} rows={1} gap={20} autoplay={5000} loop={true} hideArrow={true}>

                    <Carousel.Item>
                      <img width="100%" src={sht_services} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={sht_home_desktop} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={sht_testimonials} alt='screenshot of app'/>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img width="100%" src={vm_audio} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={vm_radio} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={vm_video} alt='screenshot of app'/>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img width="100%" src={musicology1} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={musicology2} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={musicology3} alt='screenshot of app'/>
                    </Carousel.Item>

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
                      <img width="100%" src={portfolio1} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={portfolio2} alt='screenshot of app'/>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img width="100%" src={portfolio3} alt='screenshot of app'/>
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
      <ToastContainer
        type="success"
        position="top-center"
        autoClose={5000}
        transition={Zoom}
        theme="light"
        style={{ backgroundColor: '#6c757d' }}
        />
    </>
  );
};

export default Contact;