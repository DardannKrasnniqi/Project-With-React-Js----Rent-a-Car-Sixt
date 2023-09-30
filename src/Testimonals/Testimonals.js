import React from 'react';
import './Testimonals.css';

const Testimonals = () => {
  return (
  <div className='testimonals'>

      <div className='text-testimonals'>
        <p>Our Client Says</p>
        <h1>Testimonals</h1>
      </div>

    <div className='client-text'>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div className='client-biografi'>
        <div className='client'>
            <img src='https://st.depositphotos.com/1743476/3942/i/450/depositphotos_39422931-stock-photo-mature-man-working-at-the.jpg'></img>
        <div className='client-name'>
            <h1>Jhon Dee</h1>
            <h2>Costumer</h2>
        </div>
        </div>

        <div className='client'>
            <img src='https://media.istockphoto.com/id/492224364/photo/thats-interesting.jpg?s=612x612&w=0&k=20&c=ZEwVg0SVee8uL95Zem0VOVnFAJok6Vaki1qUYrVUtb8='></img>
        <div className='client-name'>
            <h1>Jhon Dee</h1>
            <h2>Costumer</h2>
        </div>
        </div>

        <div className='client'>
            <img src='https://media.istockphoto.com/id/623192890/photo/tapping-into-business-success.jpg?s=612x612&w=0&k=20&c=pFF-VRJDka2gaqrf3kHg9swxZzX1pJRqNX1a18FnOZM='></img>
        <div className='client-name'>
            <h1>Jhon Dee</h1>
            <h2>Costumer</h2>
        </div>
        </div>

</div>
</div>
  );
}
export default Testimonals