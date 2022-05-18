const API_KEY = '39e41d7976cb6d9feea66b8b46e15637';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = {
  async getWeather(city) {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    const json = await response.json();
    return json;
  },
};

export default Weather;
