import axios from 'axios';
import * as config from './config';
import {async} from "q";



const client = axios.create({
    baseURL: config.API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers" : "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Content-Type" : "application/json"



    }

});

const wrapToken = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export async function login(email, password) {
    return client.post('auth/email', {
        email: email,
        password: password
    })
}

export async function getUnivesities(token) {
    return client.get("api/university", wrapToken(token))

}

export async function deleteUniversity(token, id) {
    return client.delete(`api/university/${id}`, wrapToken(token))
}

export async function updateUniversity(token, id, payload) {
    return client.patch(`api/university/${id}`, payload, wrapToken(token))

}