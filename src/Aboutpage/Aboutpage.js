import React from 'react';
import '../Aboutpage/Aboutpage.css';

const Aboutpage = () => {
  return (
<div className='about'>

<div className='about-info'>

   <div className='about-text'>
     <h1>Welcome To Car Rent Service</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     
     <div className='about-list'>

     <div className='list-1'>
        <li><span class="material-symbols-outlined">right_click</span>Lorem ipsum dolor sit amaet.</li>
        <li><span class="material-symbols-outlined">right_click</span>Lorem ipsum dolor sit amaet.</li>
     </div>

     <div className='list-2'>
        <li><span class="material-symbols-outlined">right_click</span>Lorem ipsum dolor sit amaet.</li>
        <li><span class="material-symbols-outlined">right_click</span>Lorem ipsum dolor sit amaet.</li>
     </div>

     </div>
   </div>

   <div className='about-img'>
    <img src='https://www.autooutlet.cz/wp-content/uploads/2023/05/web1-1-1298x730.png'></img>
   </div>
</div>

<div className='about-bottom'>

<div className='about-img'>
    <img src='https://c1.wallpaperflare.com/preview/50/659/614/car-man-drive-watch-thumbnail.jpg'></img>
   </div>

   <div className='about-text'>
     <h1>We Are Commmitted To Provide Safe Ride Solutions</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <h3>Need Any Help!</h3>
     <i class="fa-solid fa-phone"></i><span>+383 49 000 000</span>
   </div>

</div>






</div>
  )
}

export default Aboutpage