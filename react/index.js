import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import App from './App';

//const history = createHistory();
//const { store, persistor } = configureStore(history);

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);