import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
        setErrorMessage(`${e.target.name} is required.`);
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
    <section>
      <h2 data-testid='contact' className='section-title'>&lt; Contact Me /&gt;</h2>
      <p>&lt; Email: kevinjlong75@gmail.com | Phone: 512-975-0082 /&gt;</p>
      <p>&lt; Or use the form below to send me a message. /&gt;</p>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit' data-testid='button'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;