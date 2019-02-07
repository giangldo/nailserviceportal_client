import React from 'react';
import Loadable from 'react-loadable';

class ComponentHelper {
    render(path) {

        return Loadable (
            {
                loader: () => import(`../modules/${path}`),
                loading: () => "loading"
            }
        );
    }
}

export default new ComponentHelper();