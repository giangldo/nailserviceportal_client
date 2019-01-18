import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

class Auth extends Component {
    render() {
        return(
            <Switch>
                <Redirect exact from="/auth" to="/auth/login" />
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/signup" component={Signup} />
            </Switch>
        );
    }
}

export default Auth;