import React, { Component, Fragment } from 'react';

import Form from '../../../components/Form';
import AuthApi from '../../../api/Auth';
import jsonForm from '../../../data/Forms/Signup.json';

class Signup extends Component {
    
    state = {
        form: {}
    }

    componentWillMount() {
        // data can fetch from api
        this.setState({
            form: JSON.parse(JSON.stringify(jsonForm))
        });
        
    };

    onSignupSubmit = (name, data) => {
        //const res = await 
        console.log(name);
        console.log(data);
    }

    render() {
        const { title, tagName, fields, buttons } = this.state.form;

        return (
            <Fragment>
                <Form 
                    onSubmit={this.onSignupSubmit} 
                    title={title} 
                    tagName={tagName || 'ul'} 
                    fields={fields} 
                    buttons={buttons}
                />
            </Fragment>
        );
    }
}

export default Signup;