import './App.css';
import React, { useState } from 'react';
import { validateEmail } from './utils/helpers.js';

function Contact() {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
  const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'Name') {
    setName(inputValue);
  } else {
    setMessage(inputValue);
  }
};
const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
   
    return;
    
  }

  
  setName('');
  setMessage('');
  setEmail('');
};

  return (
    <div>
    <div className="App">
      <header className="App-header">
      <h1>Hello, let's get in touch!</h1>
      <div>
      <form className="form">
        <input className="form"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input className="form"
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input className="form"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} </div>
      </header>
    <p className="text">
      Contact Me
    </p>
    <p className= "text">
    Phone #: 919.906.4254
    </p>
    <p className="text">
     Email: ldmoore15@gmail.com
    </p>
    </div>
    </div>
  );
}

export default Contact;