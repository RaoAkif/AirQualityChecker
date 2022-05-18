import React from 'react';
// import {
//   useSelector,
//   useDispatch,
// } from 'react-redux';
// import { fetchCities } from '../../redux/city/citySlice';

import City from '../../components/City/City';
import './style.css';

export default function Home() {
  // const cities = useSelector((state) => state.cities);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCities());
  // }, []);

  return (
    <div className="home">
      <City />
    </div>
  );
}
