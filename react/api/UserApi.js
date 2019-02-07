import ApiHelper from '../utils/ApiHelper';

const UserApi = {
    get() {
        return ApiHelper.get('/user', params);
    }
};

export default UserApi;