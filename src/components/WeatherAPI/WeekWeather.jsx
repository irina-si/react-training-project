import React, { useState } from 'react';
import './WeatherAPI.css';
import api from './api';
import moment from 'moment';
import Moment from 'react-moment';

const WeekWeather = () => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [weather2, setWeather2] = useState({});

    const search2 = (e) => {
        fetch(`${api.staticURL}onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${api.key2}`)
            .then(res => res.json())
            .then(result => {           
                setWeather2(result);
                setLatitude('');
                setLongitude('');
            })
        e.preventDefault();
    }

    const { daily } = weather2;
    const week = [moment().add(1, 'd'), moment().add(2, 'd'), moment().add(3, 'd'), moment().add(4, 'd'), moment().add(5, 'd'), moment().add(6, 'd'), moment().add(7, 'd')]

    return ( 
        <div className='weatherContainer'>
            <div className='searchContainer'>
                <div>
                <h3>Enter coordinates:</h3>
                <input 
                    type="text"
                    placeholder='Enter latitude...' 
                    onChange={e => setLatitude(e.target.value)} 
                    value={latitude} 
                />
                <input 
                    type="text"
                    placeholder='Enter longitude...' 
                    onChange={e => setLongitude(e.target.value)} 
                    value={longitude} 
                />
                </div>
                <div>
                    <button type='submit' onClick={search2}>Week forecast</button>
                </div>
            </div>
            {(typeof daily != 'undefined') ? (
            <div className='resultContainer2'>

                { week.map(day => 
                    <Moment date={day} format='DD.MM'/> 
                ) }

                { daily.map((day) => 
                    <div className='temp'>
                        {Math.round(day.temp.day)}°c
                    </div> 
                ) }

            </div> 
            ) : ('')}   
        </div> 
    );
}

export default WeekWeather; 