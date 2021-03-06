import axios from "axios";

import config from "../_utilization/config";

var token = window.localStorage.getItem('token');

const CancelToken = axios.CancelToken;
let cancel;

const instance = axios.create({
    baseURL: config.api_endpoint,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    cancelToken: new CancelToken(function executor(c) {
        cancel = c;
    })
});

const instanceUrlencoded = axios.create({
    baseURL: config.api_endpoint,
    timeout: 20000,
    headers: {
        'Accept': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
    },
    cancelToken: new CancelToken(function executor(c) {
        cancel = c;
    })
});

const checkUserIdentity = () => {
    return instance
        .get('/auth/user')
        .then(res => {
            const { status, data} = res;
            if (data.login) {
                return {
                    user_id: data.userId,
                    user_name : data.user_name,
                    status: status,
                }
            } else {
                return {
                    status: false,
                    error: data,
                }
            }
        })
        .catch(err => {
            return {
                status: false,
                error: err,
            }
        });
}

const setToken = (token) => {
    window.localStorage.setItem('token', token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
}

const logout = () => {
    token = null;
    window.localStorage.clear();
}

export default {
    fetch: instance,
    fetchUrlEncoded: instanceUrlencoded,
    checkUserIdentity,
    setToken,
    logout,
    cancel,
}