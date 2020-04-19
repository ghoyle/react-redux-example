import { createSlice} from '@reduxjs/toolkit';
import fetch from "cross-fetch";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities: [],
        sortOrder: 'BY_NUMBER',
        isFetching: false,
    },
    reducers: {
        requestCities: state => {
            state.isFetching = true
        },
        receiveCities: (state, action) => {
            state.cities = action.payload.results
            state.isFetching = false
        },
        sortCities: (state, action) => {
            let tempCities = state.cities;
            tempCities.sort((a,b) => a[action] - b[action])
            state.cities = tempCities;
        },
    },
});

export const {requestCities, receiveCities, sortCities} = citiesSlice.actions;

export const fetchCities = (country, limit = 20, orderBy = 'locations', direction = 'desc') => dispatch => {
    dispatch(requestCities());
    return fetch(`https://api.openaq.org/v1/cities?country=${country}&limit=${limit}&order_by=${orderBy}&sort=${direction}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCities(json)))
}

export const cities = state => state.citiesReducer.cities;


export default citiesSlice.reducer;