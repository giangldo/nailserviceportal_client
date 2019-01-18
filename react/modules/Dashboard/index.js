import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Admin from './Admin';

class Dashboard extends Component {
    render() {
        return(
            <Switch>
                <Redirect exact from="/dashboard" to="/dashboard/admin" />
                <Route path="/dashboard/admin" component={Admin} />
            </Switch>
        );
    }
}

export default Dashboard;