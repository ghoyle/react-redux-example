import React, {Component} from "react";
import {CitiesList} from "../../features/cities/CitiesList";

class Dashboard extends Component{

    render() {
        return <React.Fragment>
            <h1>Dashboard</h1>
            <CitiesList/>
        </React.Fragment>
    }
}

export default Dashboard