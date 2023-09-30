import React from 'react';
import '../Rentservice/Rentservice.css';


const Rentservice = () => {
  return (
    <div className='rentservice'>

        <div className='text-popular'>
        <h1>About Us</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
        </div>
    
    <div className='description'>
        <div className='description-text'>
            <h1>Welcome To Rent A Car</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className='description-img'>
            <img src='https://sketchelements.com/wp-content/uploads/2020/08/rental-car-app.png' className='img-1'></img>
        </div>
    </div>

    <div className='description'>
    <div className='description-img-car'>
            <img src='https://www.hasso-rentacar.com/app/uploads/2023/02/PEUGEOT-2008-HASSO-1024x521.png' className='img-3'></img>
        </div>

        
        <div className='description-text'>
            <h1>Rent A Car Service</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        </div>
    </div>
  )
}

export default Rentservice