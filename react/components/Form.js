import React, { Component, Fragment } from 'react';

import FormField from './FormField';
import FormButton from './FormButton';

class Form extends Component {
    
    constructor(props) {
        super(props);

        const fields = this.props.fields.reduce((fields, field) => {
            fields[field.inputKey] = field.inputValue || '';
            return fields;
        }, {});

        this.state ={
            submitted: false,
            errors: null,
            fields
        }
    }

    componentWillUnmount() {
        this.unmounted = true;
    }

    onButtonClick = (name) => {
        if(this.state.submitted) return;

        this.setState({
            submitted: true
        });

        this.props.onClick(name, this.state.fields);

    }

    onFieldChange = (name, value) => {
        this.setState({ fields: { ...this.state.fields, [name]: value } });
    }

    render() {
        return (
            <form>
                <header>{this.props.title}</header>
                {
                    React.createElement(
                        `${this.props.tagName}`,
                        null,
                        <Fragment>
                            {
                                this.props.fields.map(field => {
                                    
                                    const labelField = {
                                        label: field.labelName
                                    },
                                    inputField = {
                                        name: field.inputKey,
                                        type: field.inputType,
                                        placeholder: field.inputPlaceholder,
                                        value: this.state.fields[field.inputKey]
                                    };

                                    return <FormField 
                                        key={field.inputKey} 
                                        tagName={field.fieldTagName || 'li'} 
                                        labelField={labelField} 
                                        inputField={inputField} 
                                        onChange={this.onFieldChange} />
                                })
                            }
                        </Fragment>
                    )
                }
                <footer>
                {
                    this.props.buttons.map(button => {
                        return <FormButton 
                            key={button.buttonName} 
                            name={button.buttonName} 
                            type={button.buttonType} 
                            value={button.buttonValue} 
                            text={button.buttonText} 
                            onClick={this.onButtonClick} 
                        />
                    })
                }
                </footer>
            </form>
        );
    }
}

export default Form;