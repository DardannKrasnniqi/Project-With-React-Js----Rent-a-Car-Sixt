import React from 'react';
import './Navbar.css';
import { Menuitems } from '../Menu/MenuItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='logo'>
        <h1>RENT A CAR SIXT</h1>
      </div>

     <div className='menu'>
      <ul>
      {Menuitems.map((item, index) => {
        return (
          <li key={index}>
          <Link className={item.cname} to={item.url}>
          <i class={item.icon}></i>
          {item.title}</Link>
          </li>
        )
      })}
      </ul>
      </div>

    </div>
  )
}

export default Navbar