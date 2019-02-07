import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { CHANGE_AUTHENTICATED } from "./Auth/AuthActionType";

import authReducer from './Auth/AuthReducer';
import userReducer from './User/UserReducer';
import metaReducer from './Meta/MetaReducer';

import AuthHelper from '../utils/AuthHelper';
import ApiHelper from '../utils/ApiHelper';
import OnlineService from '../utils/OnlineService';

const storePersistConfig = {
    key: 'store',
    storage,
    blacklist: ['meta']
};

const storeReducer = persistReducer(
    storePersistConfig,
    combineReducers({
        auth: authReducer,
        user: userReducer,
        meta: metaReducer
    })
);

const moduleReducers = combineReducers(
    {
        //dashboard: dashboardReducer
    }
);

const appPersistConfig = {
    key: 'app',
    storage,
    blacklist: []
};

const appReducer = persistReducer(
    appPersistConfig,
    combineReducers({
        router: connectRouter(history),
        store: storeReducer,
        //module: moduleReducers
    })
);

const rootReducer = (state, action) => {
    // clear the state when the user logs out
    if (action.type === CHANGE_AUTHENTICATED) {
        if (!action.authenticated) {
            //state = undefined;
        }
    }
    return appReducer(state, action);
}

// 
const configureStore = (history, initialState = {}) => {
    /**/
    const enhancers = compose(
        applyMiddleware(thunk, routerMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    const store = createStore(rootReducer, initialState, enhancers);
    const persistor = persistStore(store);
    
    ApiHelper.init(store);
    AuthHelper.init(store, persistor);
    OnlineService.init(store);

    return {store, persistor};
    
}

export default configureStore;