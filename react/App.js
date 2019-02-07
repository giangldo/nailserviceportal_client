import React, { Component } from 'react';

import AppContainer from './AppContainer';
import Template from './components/Template';
import { Admin } from './data/Layouts'; 
import { Nav } from './data/Menus';

class App extends Component {
    render() {
        return (
            <Template layout={ Admin } nav={ Nav } />                 
        );
    }
}

export default AppContainer(App);