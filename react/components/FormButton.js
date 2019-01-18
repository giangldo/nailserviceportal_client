import React, { Component } from 'react';

class Button extends Component {
    onButtonClick = (e) => {
        this.props.onClick(e.target.name);
    }

    render() {
        return (
            <button type={this.props.type} name={this.props.name} value={this.props.value} onClick={this.onButtonClick}>{this.props.text}</button>
        );
    }
}

export default Button;