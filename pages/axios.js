import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.BASEURL
});

export default instance;