import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'qs';

import AuthApi from '../../api/AuthApi';
import Loader from '../../components/Loader';

class Verification extends Component {
    state = {
        verified: false
    }

    componentDidMount() {
        this.verification();
    }

    verification = async () => {
        const queryString = window.location.search.substr(1);
        const queryParams = qs.parse(queryString);

        const res = await AuthApi.verification(queryParams);

        if(res) {
            const { success, errors } = res.data;
            if(success) {
                this.setState({
                    verified: true
                });
            }
        }
    }

    render() {
        if(this.state.verified) {
            return <Redirect to="/auth/login" />
        } else {
            return <div>false</div>
        }
    }
}

export default Verification;

