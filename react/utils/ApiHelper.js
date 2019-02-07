import qs from 'qs';

import ConfigHelper from './ConfigHelper';
import AuthHelper from './AuthHelper';

class ApiHelper {
    constructor() {
        this.baseURL = ConfigHelper.get('API_BASE_URL');
        this.store = null;
    }

    init(store) {
        this.store = store;
    }

    offline() {
        console.log('ApiService: offline');

        const state = this.store.getState();

        if (state.store.meta.online) {
            return false;
        } else {
            return Promise.reject({ message: "Network Error" });
        }
    }

    method = method => {
        return {
            method,
            headers: {
                ...AuthHelper.auth,
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }
    }

    post(url, data) {
        console.log('ApiHelper: POST');

        return fetch(this.baseURL + url, {
            ...this.method('POST'),
            body: JSON.stringify(data)
        })
        .then(res => this.handleJson(res))
        .then(res => this.handleAuth(res))
        .catch(error => error);
    }

    get(url, params) {
        console.log('ApiHelper: GET');

        return fetch(this.baseURL + url + '?' + qs.stringify(params), {
            ...this.method('GET')
        })
        .then(this.handleError.bind(this))
        .then(res => this.handleJson(res))
        .then(res => this.handleAuth(res))
        .catch(error => error);
    }

    put(url, data) {
        console.log('ApiHelper: PUT');

        return fetch(this.baseURL + url, {
            ...this.method('PUT'),
            body: JSON.stringify(data)
        })
        .then(res => this.handleJson(res))
        .then(res => this.handleAuth(res))
        .catch(error => error);
    }

    delete(url) {
        console.log('ApiHelper: DELETE');

        return fetch(this.baseURL + url, {
            ...this.method('DELETE')
        })
        .then(res => this.handleJson(res))
        .then(res => this.handleAuth(res))
        .catch(error => error);
    }

    handleAuth(res) {
        let headers = {};
        res.headers.forEach((value, name) => {
            headers[name] = value;
        });

        AuthHelper.set(headers);
        return res;
    }
    
    handleJson(res) {
        return res.json().then(json => {
            res.data = json;
            return res;
        });
    }

    handleError(res) {
        if(!res.ok) {
            if (res.status === 401) {
                return AuthHelper.logout();
            }
            throw this.handleJson.bind(this);
        }
        return res;
    }
}

export default new ApiHelper();