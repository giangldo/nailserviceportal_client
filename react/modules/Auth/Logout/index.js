import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthHelper from '../../../utils/AuthHelper';

class Logout extends Component {
    
    componentDidMount() {
        AuthHelper.logout();
    }

    render() {
        return <Redirect to='/auth/login' />
    }
}

export default Logout;