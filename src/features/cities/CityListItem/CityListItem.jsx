import React  from 'react'
import PropTypes from 'prop-types'
import './cityListItem.scss'
import {
    useHistory
} from "react-router-dom";


function CityListItem (props){
    let history = useHistory();
    const {items} = props;
    const selectItem = (item) => {
        history.push("/city/" + item.name)
    }
        return (
            <ul className="Tile-container">
                {items.map((item, i) => (
                    <li key={i} className="Tile-item" onClick={() => selectItem(item)}>{item.name}<br/><strong>Locations:</strong> {item.locations}</li>
                ))}
            </ul>
        )

}

CityListItem.propTypes = {
    items: PropTypes.array.isRequired
}
export default CityListItem