import { createSlice} from '@reduxjs/toolkit';
import fetch from "cross-fetch";

export const citySlice = createSlice({
    name: 'city',
    initialState: {
        isFetching: false,
        selectedCity: {
            name: null,
            data: null
        }
    },
    reducers: {
        selectCity: (state, city) => {
            console.log(city);
            state.selectedCity.name = city.payload
        },
        requestCity: state => {
            state.isFetching = true
        },
        receiveCity: (state, action) => {
            state.selectedCity.data = action.payload.results
            state.isFetching = false

        },
    },
});

export const {selectCity, requestCity, receiveCity} = citySlice.actions;

export const fetchCity = (city) => dispatch => {
    dispatch(selectCity(city));
    dispatch(requestCity());
    return fetch(`https://api.openaq.org/v1/latest?city=${city}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCity(json)))
}

export const selectedCity = state => state.cityReducer.selectedCity;

export default citySlice.reducer;