import React from 'react';
import header from '../../assets/images/header.svg';
import './style.css';

function Header() {
  return (
    <div className="header">
      <img src={header} alt="header banner" />
    </div>
  );
}

export default Header;
