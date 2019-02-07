import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from "redux-persist/integration/react";

import ServiceWorker from './utils/ServiceWorker';
import configureStore from './store';
import Loader from './components/Loader';
import App from './App';

const history = createHistory();
const { store, persistor } = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </PersistGate>
    </Provider>, 
    document.querySelector('#root')
);

ServiceWorker.register();