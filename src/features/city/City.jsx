import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectedCity, fetchCity} from "../city/citySlice";
import {
    useLocation
} from "react-router-dom";
export function City() {
    let myCity = useSelector(selectedCity);
    const dispatch = useDispatch();
    const location = useLocation()
    const cityName = location.pathname.replace('/city/', '');
    if(myCity.name === null) {

        dispatch(fetchCity(cityName))
    }
    return(
        <React.Fragment>
            <h1>{myCity.name || "City"}</h1>
            {(myCity.data !== null && myCity.data.length > 0) &&
                    <ul>
                        {myCity.data.map((location, index) =>
                        <li key={index}>
                            {location.location + ' - '}
                            {location.measurements.map((measure, index) =>
                                measure.value + ' ' + measure.parameter + (index < (location.measurements.length - 1) ? ', ': '' )
                            )}
                        </li>
                    )}
                    </ul>

            }
        </React.Fragment>
    )
}