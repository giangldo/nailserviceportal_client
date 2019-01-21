import React, { Component, Fragment } from 'react';
import Form from '../../../components/Form';
import loginForm from '../../../data/Forms/Login.json';

class Login extends Component {
    state = {
        form: {}
    }

    componentWillMount() {
        this.setState({
            form: JSON.parse(JSON.stringify(loginForm))
        });
    }

    onFormClick = (name, data) => {
        switch(name) {
            default:
                // submit
                console.log(data);
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
            </Fragment>
        );
    }
}

export default Login;