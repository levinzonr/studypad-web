import * as types from './actionTypes'
import * as api from '../../services/api'


const receiveLogin = item => ({
    type: types.LOGIN,
    item,
});


export function login(email, passsword) {
    console.log('login');
    return (dispatch) => {
        console.log("login");
        api.login(email, passsword).then((response) => {
            console.log(response);
            dispatch(receiveLogin(response.data));
        }).catch((error) => {
            console.log("error")
        })
    }
}




