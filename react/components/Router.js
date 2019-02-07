import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import ComponentHelper from '../utils/ComponentHelper';

const Router = withRouter(() => {
    return(
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <ProtectedRoute path="/dashboard" component={ ComponentHelper.render("Dashboard") } />
            <Route path="/auth" component={ ComponentHelper.render("Auth") } />
        </Switch>
    );
});

export default Router;