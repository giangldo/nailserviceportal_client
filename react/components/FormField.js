import React, { Component, Fragment } from 'react';

class Field extends Component {

    onInputChange = (e) => {
        this.props.onChange(this.props.inputField.name, e.target.value);
    }

    render() {
        
        const { label } = this.props.labelField;
        const { name, value, placeholder } = this.props.inputField;

        return React.createElement(
            `${this.props.tagName}`,
            null,
            <Fragment>
                <label>{label}</label>
                <input 
                    name={name} 
                    value={value}
                    placeholder={placeholder}
                    onChange={this.onInputChange} 
                />
            </Fragment>
        );
    }
}

export default Field;