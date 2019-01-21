import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import ServiceWorker from './utils/ServiceWorker';
import configureStore from './store';
import App from './App';
import configHelper from './utils/ConfigHelper';

//console.log(configHelper.get());

//const history = createHistory();
//const { store, persistor } = configureStore(history);

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);

ServiceWorker.register();