import { CHANGE_AUTHENTICATED, UPDATE_CURRENT_USER } from "./AuthActionType";

export function changeAuthenticated(authenticated) {
    return {
        type: CHANGE_AUTHENTICATED,
        authenticated
    };
}

export function updateCurrentUser(user) {
    return { 
        type: UPDATE_CURRENT_USER, 
        user 
    };
}