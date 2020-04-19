import {combineReducers} from 'redux'
import cities from "./cityReducer";
import counterReducer from '../../features/counter/counterSlice';

const rootReducer = combineReducers({
    cities,
    counterReducer
})
export default rootReducer