import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    sortCities,
    fetchCities,
    cities
} from "./citiesSlice";
import Tile from "../../components/tile/Tile";

export function Cities() {
    let myCities = useSelector(cities);
    const dispatch = useDispatch();
    if(myCities.length === 0) {
        dispatch(fetchCities('GB'));
    }
    const sort = () => {
        dispatch(sortCities('name'))
    }

    return (
        <React.Fragment>
            <h1>Cities</h1>
            {myCities && myCities.length > 0 &&
            <React.Fragment>
                <button onClick={() => sort()}>Sort Alphabetically</button>
                <Tile items={myCities}/>
            </React.Fragment>
            }
        </React.Fragment>
    )
}