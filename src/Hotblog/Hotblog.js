import React from 'react';
import './Hotblog.css';

const Hotblog = () => {
  return (
    <div className='blogs'>

      <div className='text-blogs'>
        <p>Explore Our Blogs</p>
        <h1>Latest Blogs</h1>
      </div>


       <div className='card-blogs'>

        <div className='info-blogs'>
          <img src='https://i.pinimg.com/736x/b5/87/b8/b587b88a5216a31eb39d22830858f5c0.jpg' className='card-img-1'></img>
          <h1>The Best Ways To Drive</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>

          <div className='bottom-blogs'>

           <div className='user-blogs'>
           <i class="fa-regular fa-user"></i>
           <span>Muhib</span>
           </div>

          <div className='date-blogs'>
          <i class="fa-solid fa-calendar-days"></i>
          <span>12 Dec,2020</span>
          </div>

          <div className='clock-blogs'>
          <i class="fa-regular fa-clock"></i>
          <span>9pm</span>
          </div>

        </div>
       </div>


          <div className='info-blogs'>
          <img src='https://www.hollywoodtowing.com/wp-content/uploads/2020/05/dead-car-battery-tricks.jpeg' className='card-img-1'></img>
          <h1>If You Car Battery Is Down</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>


          <div className='bottom-blogs'>

           <div className='user-blogs'>
           <i class="fa-regular fa-user"></i>
           <span>Muhib</span>
           </div>

          <div className='date-blogs'>
          <i class="fa-solid fa-calendar-days"></i>
          <span>12 Dec,2020</span>
          </div>

          <div className='clock-blogs'>
          <i class="fa-regular fa-clock"></i>
          <span>9pm</span>
          </div>
        </div>
        </div>


          <div className='info-blogs'>
          <img src='https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/038b497c-49e9-4999-a64e-34c70f74941c/Road+trip.jpg' className='card-img-1'></img>
          <h1>The Best Ways To Give Trip</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
          

        <div className='bottom-blogs'>

           <div className='user-blogs'>
           <i class="fa-regular fa-user"></i>
           <span>Muhib</span>
           </div>

          <div className='date-blogs'>
          <i class="fa-solid fa-calendar-days"></i>
          <span>12 Dec,2020</span>
          </div>

          <div className='clock-blogs'>
          <i class="fa-regular fa-clock"></i>
          <span>9pm</span>
          </div>

        </div>

          </div>


       </div>

    </div>
  )
}

export default Hotblog