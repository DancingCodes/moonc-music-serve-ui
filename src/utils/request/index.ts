import axios from 'axios';

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;