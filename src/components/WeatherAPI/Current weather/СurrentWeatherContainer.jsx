import React from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import { setWeather, setQuery } from './../../../redux/weather-reducer'

const CurrentWeatherContainer = (props) => {

    const search = () => {
        fetch(`${props.staticURL}weather?q=${props.query}&units=metric&appid=${props.apiKey}`)
            .then(res => res.json())
            .then(result => {         
                props.setWeather(result);
            })
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
     staticURL: state.weatherPage.api.staticURL,
     apiKey: state.weatherPage.api.key,  
     temperature: state.weatherPage.weatherAPIResponse.main.temp, 
     countryCode: state.weatherPage.weatherAPIResponse.sys.country,
     countryName: state.weatherPage.weatherAPIResponse.name,
     weatherDescription: state.weatherPage.weatherAPIResponse.weather[0].main,
     query: state.weatherPage.queryString,
    }
    
}

export default connect(mapStateToProps, {
    setWeather,
    setQuery,
})(CurrentWeatherContainer); 