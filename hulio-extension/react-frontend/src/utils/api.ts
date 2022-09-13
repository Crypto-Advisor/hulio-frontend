import axios from 'axios';

const api = axios.create({
    baseURL: 'http://hulio-backend.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;