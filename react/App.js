import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';
import ComponentHelper from './utils/ComponentHelper';

const AppRouter = withRouter(() => {
    return (
        <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <AuthRoute path="/dashboard" component={ ComponentHelper.render("Dashboard") } />
            <Route path="/auth" component={ ComponentHelper.render("Auth") } />
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