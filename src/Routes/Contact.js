import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Contactform from '../Contact/Contactform';

const Cars = () => {
  return (
    <div>
    <Navbar/>
    <Main
    cname='main-about'
    mainimg = 'https://www.genesisconference.com/wp-content/uploads/2023/08/contact-banner.jpg'
    title = 'Contact'
    btnclass = 'contact'
    />
    <Contactform/>
    <Footer/>
  </div>
  )
}

export default Cars