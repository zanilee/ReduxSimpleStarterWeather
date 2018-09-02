import axios from 'axios'; // axios is a library for AJAX requests and returns a promise

const API_KEY = ''; // todo: add API key
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    // Just for US cities so far. Add a country code entry later if needed
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
