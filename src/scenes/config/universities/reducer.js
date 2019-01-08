import * as types from './actionTypes'


const initState = {
    universities: [],
    loading: false,


};


export default (state = initState, payload) => {
    console.log(payload);
    switch (payload.type) {
        case types.UNIS_LOADING:
            return Object.assign({}, state, {
               loading: state.loading
            });
        case types.UNIS_LOADED:
            return Object.assign({}, state, {
                loading: false,
                universities: payload.item
            });
        default:
            return state;
    }
}