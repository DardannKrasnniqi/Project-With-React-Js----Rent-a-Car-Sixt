import React, { useState } from 'react';
import './Carlisting.css';
import { Cardata } from '../Cardata/Cardata';

const Carlisting = () => {
  const [items, setItems] = useState(Cardata);
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTitle(searchTerm);

    // Filter the car list based on the search title
    const filteredItems = Cardata.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setItems(filteredItems);
  };

  return (
    <div className='car-search'>
      <div className='search'>
        <input
          type='text'
          placeholder='Search By Title'
          value={searchTitle}
          onChange={handleSearch}
        />
      </div>

      <div className='cars'>
        {items.map((item) => (
          <div className='car-info' key={item.id}>
            <div className='car-image'>
              <img src={item.image} alt={item.title} />
            </div>
            <div className='car-title'>
              <h1>{item.title}</h1>
            </div>
            <div className='car-price'>
              <p>{item.price}</p>
            </div>
            <div className='car-model'>
              <i className={item.icon}>{item.model}</i>
              <i className={item.gearbox}>{item.titlegearbox}</i>
              <i className={item.liter}>{item.titleliter}</i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carlisting;
