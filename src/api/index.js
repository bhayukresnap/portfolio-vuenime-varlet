import axios from 'axios';

const myApi = {
    baseURL: 'https://api.jikan.moe/v3',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN'
}

export default axios.create(myApi);