import qs from 'qs';
import ApiHelper from './ApiHelper';


class AuthHelper {
    constructor() {
        this.authenticated = false;
        this.store = null;
        this.persistor = null;
        this.auth = this.get();
    }

    init() {

    }

    set() {

    }

    get() {
        const auth = JSON.parse(localStorage.getItem('auth'));
        return auth || {};
    }

    clear() {

    }

    logout() {

    }

    update() {
        
    }

    authenticate() {

    }
}

export default new AuthHelper();