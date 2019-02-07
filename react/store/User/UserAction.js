import UserApi from "../../api/UserApi";
import { GET_USER } from "./UserActionType";

export function getUser() {
    return dispatch => {
        return UserApi.get().then(res => {
            dispatch({ 
                type: GET_USER, 
                user: res.data 
            });
            return res.data;
        });
    };
}

