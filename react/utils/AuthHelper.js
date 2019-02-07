import qs from 'qs';
import AuthApi from '../api/AuthApi';
import ApiHelper from './ApiHelper';

import { changeAuthenticated, updateCurrentUser } from "../store/Auth/AuthAction";

class AuthHelper {
    constructor() {
        this.authenticated = false;
        this.store = null;
        this.persistor = null;
        this.auth = this.get();
    }

    init(store, persistor) {
        this.store = store;
        this.persistor = persistor;
    }

    set(auth) {
        console.log('AuthHelper: set()');

        ['access-token', 'expiry'].forEach(key => {
            if (auth[key]) this.auth[key] = auth[key];
        });

        localStorage.setItem("auth", JSON.stringify(this.auth));
    }

    get() {
        console.log('AuthHelper: get()');

        const auth = JSON.parse(localStorage.getItem('auth'));
        return auth || {};
    }

    setFromUrl() {
        console.log('AuthHelper: setFromUrl()');
        
        const queryString = window.location.search.substr(1);
        const queryParams = qs.parse(queryString);

        this.clear();
        this.set(queryParams);
    }

    clear() {
        console.log('AuthHelper: clear()');

        this.auth = {};
        this.store.dispatch(updateCurrentUser(null));

        this.update(false);
        
        localStorage.removeItem("auth");
    }

    update(authenticated) {
        console.log('AuthHelper: update()');

        this.authenticated = authenticated;
        this.store.dispatch(changeAuthenticated(authenticated));
    }

    logout() {
        console.log('AuthHelper: logout()');

        this.clear();

        const state = this.store.getState();
        const purgePromise = this.persistor.purge();

        if (state.store.meta.online) {
            return Promise.all([
                ApiHelper.delete("/api/auth/logout"),
                purgePromise
            ]);
        } else {
            return Promise.reject({ message: "Network Error" });
        }
    }

    authenticate = () => {
        console.log('AuthHelper: authenticate()');

        return ApiHelper.get("/api/auth/validation", this.auth)
        .then(res => {
            this.store.dispatch(updateCurrentUser(res.data.data));
            this.update(true);
            //WebSocketService.connect();
        })
        .catch(err => {
            this.clear();
            return Promise.reject(err);
        });


        /*
        const res = await AuthApi.validation(this.auth);

        if(res) {
            this.store.dispatch(updateCurrentUser(res.data.data));
            this.update(true);
            return res;
        }

        this.clear();
        return Promise.reject(res);
        */
    }

}

export default new AuthHelper();