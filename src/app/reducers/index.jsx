import {combineReducers} from 'redux'
import citiesReducer from '../../features/cities/citiesSlice';
import cityReducer from '../../features/city/citySlice';
import counterReducer from '../../features/counter/counterSlice';

const rootReducer = combineReducers({
    citiesReducer,
    cityReducer,
    counterReducer
})
export default rootReducer