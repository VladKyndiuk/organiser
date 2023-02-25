import axios from "axios";

const instance = axios.create({
    baseURL: 'https://university-organizer-web.onrender.com',
    withCredentials: false,
});

export default instance;