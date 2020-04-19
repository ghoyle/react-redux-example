import React, {Component} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchCities, sortCitiesAlphabetically} from "../../app/actions";
import Tile from "../../components/tile/Tile";

class Dashboard extends Component{
    constructor(props) {
        super(props)
        this.sortAlphabetically = this.sortAlphabetically.bind(this)
    }
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCities())
    }
    sortAlphabetically(cities){
        console.log(cities);
        // cities.sort((a, b) => a.name > b.name)
    }
    render() {
        const {cities, isFetching} = this.props;
        return <React.Fragment>
            <h1>Dashboard</h1>

            <button onClick={this.sortAlphabetically(cities.cities.cities)}>Sort
                Alphabetically</button>

            {(!isFetching && !cities) && <h2>Empty.</h2>}
            {(cities.cities.cities && cities.cities.cities.length > 0) && (
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Tile items={cities.cities.cities} />
                </div>
            )}
        </React.Fragment>
    }
}
Dashboard.propTypes = {
    cities: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}
function mapStateToProps(state) {
    const { isFetching, lastUpdated, cities } = state
    return {
        cities,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(Dashboard)