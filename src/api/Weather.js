const API_KEY =  '39e41d7976cb6d9feea66b8b46e15637';
const CITY = 'london';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;


const Weather = {
    async getWeather () {
        const response = await fetch(API_URL);
        const json = await response.json();
        
        return json;
    }
}

export default Weather;