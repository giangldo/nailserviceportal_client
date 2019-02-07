import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import ProtectedRoute from '../../components/ProtectedRoute';

import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Verification from './Verification';

const Auth = withRouter(() => {
    return(
        <Switch>    
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/logout" component={Logout} />
            <Route exact path="/auth/signup" component={Signup} />
            <Route exact getAuthFromUrl path="/auth/verification" component={Verification} />
            <Redirect to="/auth/login" />
        </Switch>
    );
});

export default Auth;