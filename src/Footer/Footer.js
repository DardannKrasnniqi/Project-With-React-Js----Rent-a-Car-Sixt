import React from 'react';
import '../Footer/Footer.css';

  function Footer() {
    return (

      <div className='start'>

        <div className='footer'>

          <div className='top'>
            <h1>RENT A CAR SIXT</h1>
          </div>

          <div className='links'>
            <h1>Quick Links</h1>
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About</li></a>
            <a href='/car'><li>Car</li></a>
            <a href='/contact'><li>Contact</li></a>
          </div>


          <div className='address'>
            <h1>Head Office</h1>
            <li>Pristina , Kosove</li>
            <li>+383 49 000 000</li>
            <li>Email : example@hotmail.com</li>
            <li>Office Team 10pm - 6pm</li>
          </div>

        </div>
        <div className='copyright'>
          <h4>Copyright © 2023 . All rights reserved !</h4>
          <h3>Mady By <b>Dardan Krasniqi</b></h3>
        </div>

      </div>
    );
  }

export default Footer