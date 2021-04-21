import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import { setQuery, getCurrentWeatherThunkCreator } from './../../../redux/weather-reducer'

const CurrentWeatherContainer = (props) => {

    useEffect( () => {
        return props.unmountWeatherComponent;
    }, []);

    const search = () => {
        props.getCurrentWeatherThunkCreator(props.query);
    }

    return ( 
        <CurrentWeather search={search} temperature={props.temperature} countryName={props.countryName}
            countryCode={props.countryCode}  weatherDescription={props.weatherDescription} query={props.query}
            setQuery={props.setQuery} 
            />
    )
}

let mapStateToProps = (state) => {
    return { 
     temperature: state.weatherPage.weatherAPIResponse.main.temp, 
     countryCode: state.weatherPage.weatherAPIResponse.sys.country,
     countryName: state.weatherPage.weatherAPIResponse.name,
     weatherDescription: state.weatherPage.weatherAPIResponse.weather[0].main,
     query: state.weatherPage.queryString,
    }
    
}

export default connect(mapStateToProps, {
    setQuery,
    getCurrentWeatherThunkCreator
})(CurrentWeatherContainer); 