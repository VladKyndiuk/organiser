import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // baseURL: 'https://university-organizer-web.onrender.com',
    withCredentials: false,
});

export default instance;