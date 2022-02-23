import React, { useEffect } from "react";
import styles from './Weather.module.css';
import { useSelector, useDispatch } from "react-redux";
import { selectWeather, selectStatus } from "./weatherSlice";
import { getWeatherAsync } from "./weatherSlice";


const Weather = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector(selectWeather);
    const status = useSelector(selectStatus);

    useEffect(() => {
            dispatch(getWeatherAsync());
            
        },[dispatch]
    );
        
    if (!status) {
        return <div>...Loading</div>;
    }

   

    return (
        <div className={styles.weather}>
        <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="weather icon"/>
           <div>{(weatherData.temp - 273.15).toFixed(1)}℃</div> 
           <div>{weatherData.description}</div> 
            
        </div>
    );
}

export default Weather;