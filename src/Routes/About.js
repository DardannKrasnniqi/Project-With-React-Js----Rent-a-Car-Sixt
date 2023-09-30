import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Main from '../Main/Main';
import Aboutpage from '../Aboutpage/Aboutpage';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div>
    <Navbar/>
    <Main
    cname='main-about'
    mainimg = 'https://i.ytimg.com/vi/4S6F2SAZtZ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcC1bPMGqwWziPfUpY808N0fCFXw'
    title = 'About Us'
    btnclass = 'about'
    />
    <Aboutpage/>
    <Footer/>
  </div>
  )
}

export default About