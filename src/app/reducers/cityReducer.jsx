import {RECEIVE_CITIES, REQUEST_CITIES, SORT_CITIES_ALPHABETICALLY} from "../actions";

function cities(
    state = {
        isFetching: false,
        cities: []
    },
    action
){
    switch (action.type) {
        case REQUEST_CITIES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_CITIES:
            return Object.assign({}, state, {
                isFetching: false,
                cities: action
            })
        case SORT_CITIES_ALPHABETICALLY:
            return Object.assign({}, state, {
                cities: action
            })
        default:
            return state
    }
}

export default cities