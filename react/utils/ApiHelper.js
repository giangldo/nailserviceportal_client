import ConfigHelper from './ConfigHelper';
import AuthHelper from './AuthHelper';

class ApiHelper {
    constructor() {
        const apiBaseUrl = ConfigHelper.get('apiBaseUrl');
        this.store = null;
    }

    init(store) {
        this.store = store;
    }

    isOffline() {

    }

    post(url, data) {

    }

    get(url, data) {

    }

    put(url, data) {

    }

    delete(url) {

    }

    handleError = error => {

    }
}

export default new ApiHelper();