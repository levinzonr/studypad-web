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
        case types.UNIS_DELETED:
           return Object.assign({}, state, {
               universities: state.universities.filter((item) => item.id !== payload.item)

           });
        default:
            return state;
    }
}