import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import ComponentHelper from './utils/ComponentHelper';

const AppRouter = withRouter(() => {
    return (
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route path="/dashboard" component={ComponentHelper.render("Dashboard")} />
            <Route path="/auth" component={ComponentHelper.render("Auth")} />
        </Switch>
    );
});

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;