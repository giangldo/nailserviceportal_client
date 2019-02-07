import { online, offline } from '../store/Meta/MetaAction';

class OnlineService {
    constructor() {
        this.store = null;
        window.addEventListener('online', this.online);
        window.addEventListener('offline', this.offline);
    }

    init(store) {
        this.store = store;
    }

    online = () => {
        this.store.dispatch(online());
    }

    offline = () => {
        this.store.dispatch(offline());
    }
}

export default new OnlineService();