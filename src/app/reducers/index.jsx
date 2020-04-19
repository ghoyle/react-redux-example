import {combineReducers} from 'redux'
import citiesReducer from '../../features/cities/citiesSlice';
import cityReducer from '../../features/city/citySlice';

const rootReducer = combineReducers({
    citiesReducer,
    cityReducer
})
export default rootReducer