import ApiHelper from '../utils/ApiHelper';
import ConfigHelper from '../utils/ConfigHelper';

const AuthApi = {
    login(email, password) {
        ApiHelper.post('/auth/login', { email, password });
    },

    signup(data) {
        console.log(data);
    },

    sendResetEmail(email) {

    },

    resetPassword(data) {

    },

    updatePassword(data) {

    }
}

export default AuthApi;