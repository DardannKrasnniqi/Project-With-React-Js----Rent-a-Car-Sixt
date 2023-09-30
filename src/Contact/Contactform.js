import React, { useState } from 'react';
import './Contactform.css';

const Contactform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Assuming email is sent successfully, save the data to local storage
    const emailSent = true;

    if (emailSent) {
      // Create an object to store the email data
      const emailData = {
        name,
        email,
        message,
      };

      // Convert the object to a JSON string and store it in local storage
      localStorage.setItem('emailData', JSON.stringify(emailData));

      alert('Email sent successfully!');

      // Clear the input fields after saving the data
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className='contact'>
      <div className='contact-form'>
        <h1>Contact Us Now</h1>
        <label>
          Name
          <input
            className='name'
            type='text'
            placeholder='Your Name ...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            className='email'
            type='text'
            placeholder='Your Email ...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='label-textarea'>
          Message
          <textarea
            className='textarea'
            placeholder='Your Message ...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <button onClick={handleSendMessage}>Send Message</button>
      </div>

      <div className='contact-info'>
        <div className='contact-address'>
          <h1>Contact Information</h1>
          <div className='address'>
            <li>Pristina, Kosove</li>
            <li>+383 49 000 000</li>
            <li>Email: example@hotmail.com</li>
            <li>Office Team 10am - 6pm</li>
          </div>
        </div>
        <div className='contact-social'>
          <h1>Follow Us</h1>
          <div className='social'>
            <a href='https://www.facebook.com/' target='_blank'><i className="fab fa-facebook"></i></a>
            <a href='https://www.instagram.com/' target='_blank'><i className="fab fa-instagram"></i></a>
            <a href='https://twitter.com/' target='_blank'><i className="fab fa-twitter"></i></a>
            <a href='https://www.tiktok.com/en/' target='_blank'><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactform;
