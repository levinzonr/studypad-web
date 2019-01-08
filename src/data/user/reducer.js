import * as type from  './actionTypes'

const initState = {
    loggedIn: false,
    token: "",
    user: {},
};


export default (state = initState, payload) => {
    switch (payload.type) {
        case type.LOGIN:
            return Object.assign({}, state, {
                loggedIn: true,
                user: payload.item.user,
                token: payload.item.access_token
            });
        case type.LOGIN_ERROR:
            break;
        case type.LOGOUT:
            return Object.assign({}, initState);
        default:
            return state;
    }
}