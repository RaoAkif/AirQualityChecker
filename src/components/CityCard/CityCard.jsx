import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWeatherAction } from '../../redux/weather/weatherSlice';
import cityData from '../City/cityData';
import back from '../../assets/images/back.png';
import './style.css';

function CityCard() {
  const { id } = useParams();
  console.log(id);
  const city = cityData[id];
  const dispatch = useDispatch();
  const history = useNavigate();
  console.log(id);
  console.log(city);

  function handleGoBack(e) {
    e.preventDefault();
    history('/');
  }

  useEffect(() => {
    dispatch(fetchWeatherAction(id));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  return (
    <div>
      <section className="relative bg-gray-900  min-h-screen">
        {loading ? (
          <h1 className="text-gray-400 text-4xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-2xl text-center">
            {error?.message}
          </h1>
        ) : (
          <div className="p-8 border border-blue-800 rounded-lg">
            <input className="go-back" type="image" src={back} onClick={handleGoBack} alt="go-back" />
            <div className="flex justify-start  items-center">
              <h2 className="text-gray-300 pl-5">{weather?.weather[0].main}</h2>
              {' '}
            </div>
            <h2 className="mb-6 text-xl text-white font-semibold">
              {weather?.name}
              {', '}
              {weather?.sys?.country}
            </h2>
            <h2 className="text-gray-300 text-center text-4xl mb-10">
              {Math.ceil(Number(weather?.main.temp))}
              {' '}
              <span className="text-yellow-500 text-4xl">°C</span>
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default CityCard;
