import React from 'react';
import s from './../WeatherAPI.module.css';
import dateBuilder from '../dateBuilder';


const CurrentWeather = (props) => {

    let updateInputText = (e) => {
        let text = e.target.value;
        props.setQuery(text);
    }

    return ( 
        <div className={s.weatherContainer}>
        <div className={s.searchContainer}>
            <div>
            <h3 className={s.header}>Enter city below:</h3>
            <input 
                className = {s.input}
                type="text"
                placeholder='Search...' // initial state?
                onChange={updateInputText} 
                value={props.query} 
            />
            </div>
            <div>
            <button className={s.button} type='submit' onClick={() => props.search()}>Show weather</button>
            </div>
        </div>
        {(!!props.countryName) ? (
        <div className={s.resultContainer}>
            <div className={s.location}>{props.countryName} {props.countryCode}</div>
            <div className={s.date}>{dateBuilder(new Date())}</div>
            <div className={s.temperature}>
            <div className={s.celsius}>{Math.round(props.temperature)}°c</div>
            <div className={s.fahrenheit}>{Math.round(props.temperature * 9/5 + 32)}°</div>
            </div> 
        </div>
        ) : ('')}   
    </div>
    );
}

export default CurrentWeather;

