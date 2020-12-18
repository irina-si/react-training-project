const SET_WEATHER = 'SET_WEATHER';
const SET_QUERY = 'SET_QUERY';
const UNMOUNT_WEATHER_COMPONENT = 'UNMOUNT_WEATHER_COMPONENT';

const initialState = {
    api: {
        key: '14e00696510fc36c2be227c72bcd3f25',
        key2: '4a63caf0cdc9b0bdbc8fcfa6681a86a2',
        staticURL: 'https://api.openweathermap.org/data/2.5/',
    },

    weatherAPIResponse: {
            "coord": {
              "lon": 0,
              "lat": 0
            },
            "weather": [
              {
                "id": 0,
                "main": "",
              }
            ],
            "main": {
              "temp": 0,
            },
            "sys": {
              "country": "",
            },
            "id": 0,
            "name": "",
            },
    queryString: '',
    }


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: 
            return {
                ...state,
                weatherAPIResponse: {
                    ...state.weatherAPIResponse,
                    name: action.newWeather.name,
                    sys: { country: action.newWeather.sys.country },
                    main: {temp: action.newWeather.main.temp},
                },
                queryString: '',
            };
        case SET_QUERY:
            return {
                ...state,
                queryString: action.query,
            };
        case UNMOUNT_WEATHER_COMPONENT:
            return {
                ...initialState,
            };
        default: return state;
    }
}


export const setWeather = (newWeather) => {
    return {
        type: SET_WEATHER,
        newWeather
    }
}

export const setQuery = (query) => {
    return {
        type: SET_QUERY,
        query
    }
}

export const unmountWeatherComponent = () => {
    return {
        type: UNMOUNT_WEATHER_COMPONENT,
    }
}

export default weatherReducer;