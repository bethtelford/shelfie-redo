import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import icon from './../../assets/shelfie_icon.png';

export default function Header() {
  return (
    <div className='Header'>
      <img src={icon} alt='logo' />
      <h1>Shelfie</h1>
      <div className='header_link_box'>
        <Link to='/'>Products</Link>
        <Link to='/add'>Add Inventory</Link>
      </div>
    </div>
  )
}