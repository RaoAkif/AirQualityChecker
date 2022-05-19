import React, { useState, useEffect } from 'react';
import header from '../../assets/images/header.png';
import './style.css';

function Header() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="header">
      <img src={header} alt="header banner" />
      <div className="date-time">
        <h2>{`${dateTime.toLocaleTimeString()}`}</h2>
        <h4>{`${dateTime.toLocaleDateString()}`}</h4>
      </div>
    </div>
  );
}

export default Header;
