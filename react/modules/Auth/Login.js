import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Form from '../../components/Form';
import { LoginForm } from '../../data/Forms/';

import AuthApi from '../../api/AuthApi';

class Login extends Component {
    state = {
        form: {},
        login: false
    }

    componentWillMount() {
        this.setState({
            form: LoginForm
        });
    }

    onFormClick = (name, data) => {
        switch(name) {
            default:
                AuthApi.login(data).then(res => {
                    if(res.data.success) {
                        console.log(res);
                        //this.props.loginSuccess();
                        this.setState({login: true});
                        return res;
                    }
                });
                
                /* if(res) {
                    const { success, errors } = res;
                    if(success) {
                        console.log(res);
                        this.props.loginSuccess();
                        return res;
                    }
                } */
        }
    }

    render() {
        const { title, tagName, fields, buttons } = this.state.form;
        if(this.state.login) {
            return <Redirect to="/" />
        } else {
            return (
                <Fragment>
                    <Form 
                         onClick={this.onFormClick} 
                         title={title} 
                         tagName={tagName || 'ul'} 
                         fields={fields} 
                         buttons={buttons}
                    />
                    <Link to='/auth/forgot'>Forgot password</Link>
                    <Link to='/auth/signup'>Go to signup</Link>
                </Fragment>
            );
        }
       
    }
}

export default Login;