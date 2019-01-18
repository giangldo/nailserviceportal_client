import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/*
import userReducer from './user/UserReducers';
import dashboardReducer from '../modules/dashboard/DashboardReducers';
import ApiService from '../utils/ApiService';

const storePersistConfig = {
    key: 'store',
    storage,
    blacklist: []
};

const storeReducer = persistReducer(
    storePersistConfig,
    combineReducers({
        users: userReducer
    })
);

const moduleReducers = combineReducers(
    {
        dashboard: dashboardReducer
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
        router: routerReducer,
        store: storeReducer,
        views: moduleReducers
    })
);

const rootReducer = (state, action) => {
    return appReducer(state, action);
}
*/
// 
const configureStore = (history, initialState = {}) => {
    /*
    const enhancers = compose(
        applyMiddleware(thunk, routerMiddleware(history))
    );
    const store = createStore(rootReducer, initialState, enhancers);
    const persistor = persistStore(store);
    
    ApiService.init(store);

    return {store, persistor};
    */
}

export default configureStore;