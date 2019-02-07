import ApiHelper from '../utils/ApiHelper';

const AuthApi = {
    login(data) {
        return ApiHelper.post('/api/auth/login', { ...data }).then(res => { return res });
    },

    logout() {
        return ApiHelper.delete('/api/auth/logout').then(res => { return res });
    },

    signup(data) {
        return ApiHelper.post('/api/auth/signup', { ...data }).then(res => { return res });
    },

    verification(params) {
        return ApiHelper.get('/api/auth/verification', { ...params }).then(res => { return res });
    },

    validation(params) {
        return ApiHelper.get('/api/auth/validation', { ...params }).then(res => { return res });
    },

    sendResetEmail(email) {

    },

    resetPassword(data) {

    },

    updatePassword(data) {

    }
}

export default AuthApi;