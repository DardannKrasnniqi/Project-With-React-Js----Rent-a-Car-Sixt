import React from 'react';
import './Hotoffers.css';


const Hotoffers = () => {

  return (
    <div>
    <div className='trips'>
        <div className='trips-text'>
          <p>Come with</p>
          <h1>Hot Offers</h1>
        </div>

       <div className='card'>
        <div className='trips-card'>
          <img src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1693556345148/front-left-side-47.jpg' className='card-img-1'></img>
          <h1>TESLA MALIBU</h1>
          <h2>$ 80.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>Model 3</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
        </div>

        <div className='trips-card'>
          <img src='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/volkswagen-polo_1.jpg?itok=xQcc-xtl' className='card-img-2'></img>
          <h1>VW POLO</h1>
          <h2>$ 40.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>2012-2019</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
        </div>

        <div className='trips-card'>
          <img src='https://images.caradisiac.com/images/8/6/5/7/88657/S1-Futur-VW-Golf-R-elle-est-la-300158.jpg' className='card-img-3'></img>
          <h1>VW GOLF VII</h1>
          <h2>$ 50.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>2013-2018</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
        </div>
       </div>





       <div className='card'>
        <div className='trips-card'>
          <img src='https://s1.cdn.autoevolution.com/images/gallery/BMW-1-Series--F20--LCI-6006_10.jpg' className='card-img-1'></img>
          <h1>BMW 1-SERIES</h1>
          <h2>$ 80.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>2013-2018</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
          </div>

        <div className='trips-card'>
          <img src='https://www.turbo.fr/sites/default/files/2020-03/2021-audi-a3-sportback-23_0.jpg' className='card-img-2'></img>
          <h1>AUDI A3</h1>
          <h2>$ 65.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>2016-2021</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
        </div>

        <div className='trips-card'>
          <img src='https://media.ed.edmunds-media.com/porsche/cayenne/2024/oem/2024_porsche_cayenne_4dr-suv_base_fq_oem_1_1600.jpg' className='card-img-3'></img>
          <h1>PORSCHE Cayenne</h1>
          <h2>$ 150.00 / Day</h2>
          <div className='about-car'>
          <i class="fa-solid fa-car"></i><span>2018-2021</span>
          <i class="fa-solid fa-gear"></i><span>Automatic</span>
          <i class="fa-solid fa-gas-pump"></i><span>4.5L/100Km</span>
          </div>
          
        </div>
       </div>

       <div className='lookmore'>
            <a href='/car'><button>Look All Cars</button></a>
          </div>

    </div>
  </div>
  )
}

export default Hotoffers