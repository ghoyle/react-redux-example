import fetch from 'cross-fetch'
export const REQUEST_CITIES = 'REQUEST_CITIES';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const SORT_CITIES_ALPHABETICALLY = 'SORT_CITIES_ALPHABETICALLY';

function requestCities() {
    return {
        type: REQUEST_CITIES
    }
}

function receiveCities(json) {
    return {
        type: RECEIVE_CITIES,
        cities: json.results.map(city => city),
        receivedAt: Date.now()
    }
}

export function sortCitiesAlphabetically(cities){
    console.log(cities);
    return {
        type: SORT_CITIES_ALPHABETICALLY,
        cities: cities
    }
}

export function fetchCities() {
    return dispatch => {
        dispatch(requestCities())
        return fetch('https://api.openaq.org/v1/cities?country=GB&limit=20&order_by=locations&sort=desc')
            .then(response => response.json())
            .then(json => {dispatch(receiveCities(json))})
    }
}