import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form';
import { SignupForm } from '../../data/Forms';

import AuthApi from '../../api/AuthApi';

class Signup extends Component {
    
    state = {
        form: {}
    }

    componentWillMount() {
        // data can fetch from api
        this.setState({
            form: SignupForm
        });
        
    };

    onFormClick = async (name, data) => {
        switch(name) {
            default:
                const res = await AuthApi.signup(data);
                console.log(res);
        }
    }

    render() {
        const { title, tagName, fields, buttons } = this.state.form;

        return (
            <Fragment>
                <Form 
                    onClick={this.onFormClick} 
                    title={title} 
                    tagName={tagName || 'ul'} 
                    fields={fields} 
                    buttons={buttons}
                />
                <Link to='/auth/login'>Go to login</Link>
                <Link to='/auth/forgot'>Forgot password</Link>
            </Fragment>
        );
    }
}

export default Signup;