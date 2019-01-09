import * as types from './actionTypes'


const initState = {
    universities: [],
    loading: false,
    newUniversity: {},
    showDialog: false

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
                showDialog: false,
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

        case types.UNIS_SHOW:
            return Object.assign({}, state, Object.assign({}, state, {
                showDialog: payload.item != null ? payload.item : !state.showDialog
            }));
        default:
            return state;
    }
}