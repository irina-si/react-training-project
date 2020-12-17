import React from 'react'; 
import CurrentWeatherContainer from './Current weather/СurrentWeatherContainer';
import WeekWeather from './WeekWeather';

const WeatherAPI = () => {
    return (       
        <div>
            <CurrentWeatherContainer />
            <WeekWeather />
        </div>
    )
}

export default WeatherAPI;