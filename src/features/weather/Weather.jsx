import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeather, selectStatus, getWeatherAsync } from './weatherSlice';
import './weather.css';

function Weather() {
  const dispatch = useDispatch();
  const weatherData = useSelector(selectWeather);
  const status = useSelector(selectStatus);
  let city = localStorage.getItem('city');
  if (!city) {
    city = prompt('Your city?');
    localStorage.setItem('city', city);
  }

  useEffect(() => {
    dispatch(getWeatherAsync(city));
  }, [dispatch]);

  if (!status) {
    return <div>...Loading</div>;
  }
  return (
    <div className="weather">
      <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather icon" />
      <div>{weatherData.city}</div>
      <div>
        {(weatherData.temp - 273.15).toFixed(1)}
        ℃
      </div>
      <div>{weatherData.description}</div>
    </div>
  );
}

export default Weather;
