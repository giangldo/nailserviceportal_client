import { dev, prod } from '../config';

class ConfigHelper {
    constructor() {
        const env = process.env.NODE_ENV;

        if(env === 'production') {
            this.config = { ...prod };
        } else {
            this.config = { ...dev };
        }    
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