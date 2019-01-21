import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthHelper from '../utils/AuthHelper';
import Loader from './Loader';
//import AuthRouteContainer from './AuthRouteContainer';

class AuthRoute extends Component {
    state = {
        authenticated: false,
        authenticating: false
    };

    render() {
        if(this.state.authenticating) {
            return <Loader />
        } else if(this.state.authenticated) {
            return (
                <Fragment>
                    <Route { ...this.props }/>
                </Fragment>
            );
        } else {
            return <Redirect to='/auth/logout' />
        }
    }
}

export default AuthRoute;