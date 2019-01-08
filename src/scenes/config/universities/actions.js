import * as types from './actionTypes'
import * as api from '../../../services/api'


const showLoading = (show) => ({
    type: types.UNIS_LOADING,
    item: show
});

const receiveUnis = item => ({
    type: types.UNIS_LOADED,
    item: item
});

export function loadUniversities() {
    return (dispatch) => {
        showLoading(true);
        api.getUnivesities().then((response => {
            dispatch(receiveUnis(response.data))
        })).catch((error) => {
            console.log(error)
            dispatch(receiveUnis([ { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 },  { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 },  { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 }]))
        })
    }
}

