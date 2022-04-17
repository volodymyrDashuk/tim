import axios from 'axios'

const http = axios.create({
    baseURL: 'https://tracker-time-app.pp.ua/api/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
})

http.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    if (!!token) {
        request.headers.common.Authorization = `Bearer ${token}`;
    }
    return request;
});

export default http;