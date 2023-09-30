import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Rentservice from '../Components/Rentservice/Rentservice';
import Testimonals from '../Testimonals/Testimonals';
import Hotoffers from '../Hotoffers/Hotoffers';
import Hotblog from '../Hotblog/Hotblog';


const Home = () => {
  return (
  <div>
    <Navbar/>
    <Main
    cname='main'
    mainimg = 'https://img.sixt.com/1600/13954fe7-98c8-42b1-b415-d211f628ccab.png'
    title = 'For Rent 70$ For Day'
    text = 'Reserve Now and Get 50% Off'
    buttontext = 'Contact Now'
    url = '/contact'
    btnclass = 'show'
    />
    <Rentservice/>
    <Hotoffers/>
    <Testimonals/>
    <Hotblog/>
    <Footer/>
  </div>
  
  )
}

export default Home