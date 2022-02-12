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
        console.log(status)
    if (!status) {
        return <div>...Loading</div>;
    }

   

    return (
        <div className={styles.weather}>
            {weatherData.temp}
        </div>
    );
}

export default Weather;