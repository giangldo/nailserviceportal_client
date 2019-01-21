import config from '../config';

class ConfigHelper {
    constructor() {
        this.config = { ...config };
    }

    get(keys) {
        const splitKeys = keys.split('.');

        return splitKeys.reduce((accumulator, key, index) => {
            if(accumulator[key]) {
                return accumulator[key];
            }

            if(splitKeys.length === index + 1) {
                return undefined;
            }
            
            return {};
        }, this.config);
    };
    
}

export default new ConfigHelper();