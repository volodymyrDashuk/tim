import axios from 'axios'

export default axios.create({
    baseURL: 'http://tim-api.loc/api/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})
