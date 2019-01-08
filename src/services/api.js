import axios from 'axios';
import * as config from './config';


const client = axios.create({
    baseURL: config.API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers" : "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Content-Type" : "application/json"



    }

});


export async function login(email, password) {
    return client.post('auth/email', {
        email: email,
        password: password
    })
}