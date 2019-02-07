import React, { Component, Fragment } from 'react';
import parse from 'html-react-parser';
const reactStringReplace = require('react-string-replace')

import Router from './Router';
import Nav from './Nav';

const Template = props => {
    
    let template =  reactStringReplace(props.layout, '{body}', (match, i) => (
        <Fragment key={i}>{<Router />}</Fragment>
    ));

    template = reactStringReplace(template, '{nav}', (match, i) => (
        <Fragment key={i}>{<Nav nav={props.nav} />}</Fragment>
    ));

    return (
        <Fragment>
                
            {template.map((item, i) => {     
                if(typeof item === 'string') {
                    item = parse(item);
                }
                return (<Fragment key={i}>{item}</Fragment>);
            })}
            
        </Fragment>
    );
}



export default Template;