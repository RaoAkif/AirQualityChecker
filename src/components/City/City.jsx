import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cityData from './cityData';

function City() {
  return (
    <div className="cities">
      {Object.entries(cityData).map(([id, { name, latitude, longitude }]) => (
        <li key={id} className="city">
          <Link to={`/city/${name}`}>
            <div className="city-details">
              <h4>{name}</h4>
              <p>
                &#40;
                {latitude}
                ,&nbsp;
                {longitude}
                &#41;
              </p>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
}

export default City;
