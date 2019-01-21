import React, { Component, Fragment } from 'react';

import Form from '../../../components/Form';
import jsonForm from '../../../data/Forms/Signup.json';

import AuthApi from '../../../api/AuthApi';

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

    onFormClick = (name, data) => {
        switch(name) {
            case 'submit':

            break;
            case 'cancel':
            break;
            default:
        }
        //const res = await 
        console.log(name);
        console.log(data);
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

export default Signup;