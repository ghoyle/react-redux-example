import React, {Component} from "react";
import {Cities} from "../../features/cities/Cities";

class Dashboard extends Component{

    render() {
        return <React.Fragment>
            <h1>Dashboard</h1>
            <Cities/>
        </React.Fragment>
    }
}

export default Dashboard