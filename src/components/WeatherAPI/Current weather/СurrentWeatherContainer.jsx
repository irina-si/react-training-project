import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';
import { setWeather, setQuery, unmountWeatherComponent } from './../../../redux/weather-reducer'
import { withRouter } from 'react-router-dom';

const CurrentWeatherContainer = (props) => {

    useEffect( () => {
        return props.unmountWeatherComponent;
    }, []);

    const search = () => {
        fetch(`${props.staticURL}weather?q=${props.query}&units=metric&appid=${props.apiKey}`)
            .then(res => res.json())
            .then(result => {
                if (result.cod === 200) {
                    props.setWeather(result);
                } else {
                    return Promise.reject(result.message); 
                }           
            }).catch( (message) => {
                alert(message);
                props.unmountWeatherComponent();
            });
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

let withUrlCurrentWeatherContainer = withRouter(CurrentWeatherContainer);

export default connect(mapStateToProps, {
    setWeather,
    setQuery,
    unmountWeatherComponent
})(withUrlCurrentWeatherContainer); 