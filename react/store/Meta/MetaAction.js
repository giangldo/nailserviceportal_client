import { CONNECTED, DISCONNECTED, ONLINE, OFFLINE } from './MetaActionType';

export function connected(authenticated) {
    return {
        type: CONNECTED
    }
}

export function disconnected() {
    return {
        type: DISCONNECTED
    }
}

export function online() {
    return {
        type: ONLINE
    }
}

export function offline() {
    return {
        type: OFFLINE
    }
}
