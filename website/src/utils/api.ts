import axios from 'axios';

//https://hulio-backend.herokuapp.com/api/

const api = axios.create({
    baseURL: 'http://hulio-backend.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;