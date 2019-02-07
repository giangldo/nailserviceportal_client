import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Admin from './Admin';

const Dashboard = withRouter(() => {
    return(
        <Switch>
            <Redirect exact from="/dashboard" to="/dashboard/admin" />
            <Route path="/dashboard/admin" component={Admin} />
        </Switch>
    );
});

export default Dashboard;