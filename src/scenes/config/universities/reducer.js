import * as types from './actionTypes'


const initState = {
    universities: [],
    loading: false,
    newUniversity: {}


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

        case types.UNIS_NEW_FULL:
            return Object.assign({}, state, Object.assign({}, state, {
               newUniversity: Object.assign({}, state.newUniversity, {
                   fullName: payload.item
               })
            }));
        case types.UNIS_NEW_SHORT:
            return Object.assign({}, state, Object.assign({}, state, {
                newUniversity: Object.assign({}, state.newUniversity, {
                    shortName: payload.item
                })
            }));
        default:
            return state;
    }
}