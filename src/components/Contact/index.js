import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import whoDoImg from '../../assets/Who_Do_login.png';

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
      <section className='container shadow-lg'>
        <div className='row'>
          <div className='col'>
            <div id='contact-card' className='card shadow-lg'>
              <h4 className='card-title'>&lt; 
                <a href='mailto:kevinjlong75@gmail.com'>   
                   kevinjlong75@gmail.com
                </a> | 512-975-0082 /&gt;
              </h4>
              <div className='card-body container'>
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
                    
                      {errorMessage && (
                       <p id='contact-error-text' className='error-text text-danger'>{errorMessage}</p>
                      )}
                      <button type='submit' className='btn btn-secondary' id='contact-form-btn' data-testid='button'>Submit</button>

                    
                    </div>
                  </div>
                </form>              
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;