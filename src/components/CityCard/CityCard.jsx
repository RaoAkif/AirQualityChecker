import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWeatherAction } from '../../redux/weather/weatherSlice';
import back from '../../assets/images/back.png';
import './style.css';

function CityCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleGoBack(e) {
    e.preventDefault();
    history('/');
  }

  useEffect(() => {
    dispatch(fetchWeatherAction(id));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;

  const sunrise = weather?.sys.sunrise;
  const date1 = new Date(sunrise * 1000);
  const hours1 = date1.getHours();
  const minutes1 = `0${date1.getMinutes()}`;
  // const seconds1 = `0${date1.getSeconds()}`;
  // const formattedTime = `${hours1} : ${minutes1.substr(1, 2)} : ${seconds1.substr(1, 2)}`;
  const formattedTime = `${hours1} : ${minutes1}`;

  const sunset = weather?.sys.sunset;
  const date2 = new Date(sunset * 1000);
  const hours2 = date2.getHours();
  const minutes2 = `0${date2.getMinutes()}`;

  const formattedTime2 = `${hours2} : ${minutes2.substr(1, 2)}`;

  return (
    <div className="city-weather-details">
      <section>
        {loading ? (
          <h1>Loading please wait...</h1>
        ) : error ? (
          <h1>
            {error?.message}
          </h1>
        ) : (
          <div className="weather-details">
            <input className="go-back" type="image" src={back} onClick={handleGoBack} alt="go-back" />
            <div className="the-city">
              <h2 className="m-0">
                {weather?.name}
                {', '}
                {weather?.sys?.country}
              </h2>
            </div>
            <div className="sunrise">
              <h2 className="m-0">Sunrise&nbsp;&nbsp;</h2>
              <h2 className="m-0 f-12">
                {formattedTime}
                {' AM'}
              </h2>
            </div>
            <div className="sunset">
              <h2 className="m-0">Sunset&nbsp;&nbsp;</h2>
              <h2 className="m-0 f-12">
                {formattedTime2}
                {' PM'}
              </h2>
            </div>
            <div className="temperature">
              <h2 className="m-0">
                {Math.ceil(Number(weather?.main.temp))}
                {' '}
                <span>°C</span>
              </h2>
            </div>
            <div className="temp-details">
              <h2 className="m-0 f-12">
                Feels like:
                {' '}
                {weather?.main.feels_like}
                {' '}
                <span>°C</span>
              </h2>
              <h2 className="m-0 f-12">
                Min. Temperature:
                {' '}
                {weather?.main.temp_min}
                {' '}
                <span>°C</span>
              </h2>
              <h2 className="m-0 f-12">
                Max. Temperature:
                {' '}
                {weather?.main.temp_max}
                {' '}
                <span>°C</span>
              </h2>
            </div>
            <div className="air-pressure">
              <h2>
                Air Pressure:
                {' '}
                {weather?.main.pressure}
                {' '}
                atm
              </h2>
            </div>
            <div className="humidity">
              <h2>
                Humidity:
                {' '}
                {weather?.main.humidity}
                {' '}
                gm
                <sup>-3</sup>
              </h2>
            </div>
            <div>
              <h2 className="wind-condition m-0">Wind Condition</h2>
              <h2 className="m-0 f-12">
                Wind Speed:
                {' '}
                {weather?.wind.speed}
                {' '}
                Pa
              </h2>
              <h2 className="m-0 f-12">
                Wind Angle:
                {' '}
                {weather?.wind.deg}
                {' '}
                <span>°C</span>
              </h2>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default CityCard;
