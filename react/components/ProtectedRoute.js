import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Loader from './Loader';
import ProtectedRouteContainer from './ProtectedRouteContainer';
import AuthHelper from '../utils/AuthHelper';

class ProtectedRoute extends Component {
    state = {
        authenticated: false,
        authenticating: true
    };

    authenticate = this.authenticate.bind(this);

    componentWillMount() {
        console.log('ProtectedRoute: componentWillMount()');

        if (this.props.getAuthFromUrl) {
            AuthHelper.setFromUrl();
        }

        this.authenticate();
    }

    componentDidUpdate(prevProps) {
        console.log('ProtectedRoute: componentDidUpdate()');
        
        if(prevProps.authenticated && !this.props.authenticated) {
            this.setState({ authenticating: false, authenticated: false });
        }

        if (!prevProps.online && this.props.online) {
            this.authenticate();
        }
    }

    authenticate() {
        console.log('ProtectedRoute: authenticate()');
        
        this.setState({ authenticating: true, authenticated: false });

        if (this.props.authenticated) {

            this.authenticated();

        } else if (this.props.online) {

            AuthHelper.authenticate()
            .then(this.authenticated.bind(this))
            .catch(this.notAuthenticated.bind(this));

        } else if (this.props.currentUser) {

            this.authenticated();

        } else {

            this.notAuthenticated();
        }
    }

    authenticated() {
        console.log('ProtectedRoute: authenticated()');

        this.setState({ authenticating: false, authenticated: true });
    }

    notAuthenticated() {
        console.log('ProtectedRoute: notAuthenticated()');

        this.setState({ authenticating: false, authenticated: false });
    }

    render() {
        if(this.state.authenticating) {
            return <Loader />
        } else if(this.state.authenticated) {
            return (
                <Fragment>
                    <Route { ...this.props } />
                </Fragment>
            );
        } else {
            return <Redirect to='/auth/logout' />
        }
    }
}

export default ProtectedRouteContainer(ProtectedRoute);