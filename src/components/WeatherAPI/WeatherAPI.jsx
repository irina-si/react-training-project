import React from 'react'; 
import CurrentWeather from './СurrentWeather';
import WeekWeather from './WeekWeather';

const WeatherAPI = () => {
    return (       
        <div>
            <CurrentWeather />
            <WeekWeather />
        </div>
    )
}

export default WeatherAPI;