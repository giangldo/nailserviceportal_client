import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
    state = {
        links: []
    }

    componentWillMount() {
        // data can fetch from api
        console.log(this.props.nav);
    };
    
    render() {
        return(
            <div><Link to='/auth/logout'>Logout</Link></div>
        );
    }
}

export default withRouter(Nav);