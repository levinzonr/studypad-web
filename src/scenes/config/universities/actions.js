import * as types from './actionTypes'
import * as api from '../../../services/api'
import {invoke} from "q";


const showLoading = (show) => ({
    type: types.UNIS_LOADING,
    item: show
});

const receiveUnis = item => ({
    type: types.UNIS_LOADED,
    item: item
});

const universityDeleted = item => ({
   type: types.UNIS_DELETED,
   item: item
});

export const universityUpdated = item => ({
    type: types.UNIS_EDITED,
    item: item,
});

export const setNewSchoolName = item => ({
    type: types.UNIS_NEW_FULL,
    item: item
});

export const setShortName = item => ({
    type: types.UNIS_NEW_SHORT,
    item: item
});


export const showDialog = item => ({
    type: types.UNIS_SHOW,
    item: item
});

export function loadUniversities() {
    return (dispatch, getState) => {
        showLoading(true);
        api.getUnivesities(getState().user.token).then((response => {
            dispatch(receiveUnis(response.data))
        })).catch((error) => {
            console.log(error);
            dispatch(receiveUnis([ { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 },  { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 },  { fullName: "Czech Technical University in Prague", shortName: "ČVUT", id: 1 }]))
        })
    }
}


export function deleteUniverisity(university) {
    console.log(university);
    return (dispatch, getState) => {
        api.deleteUniversity(getState().user.token, university.id).then((response => {
            dispatch(universityDeleted(university.id))
        })).catch((error) => {
            console.log(error);
        })
    }
}

export function createUniversity() {

    return (dispatch, getState) => {
        api.createUniversity(getState().user.token, getState().unis.newUniversity).then((response) => {
            dispatch(loadUniversities())
        }).catch((error) => {
            console.log(error)
        })
    }

}



export function updateUniversity(university, values) {
    console.log(university)
    console.log(values)
    return (dispatch, getState) => {
        api.updateUniversity(getState().user.token, university.id, values).then((response) => [
            dispatch(loadUniversities())
        ]).catch((error) => {
            console.log(error)
        })
    }

}
