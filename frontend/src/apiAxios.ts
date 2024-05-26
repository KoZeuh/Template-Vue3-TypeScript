import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://URL:PORT',
    headers: {
        'Content-Type': 'application/json'
    }
});


apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const errorMessage = error.response?.data?.message || 'An unknown error occurred';
        return Promise.reject(new Error(errorMessage));
    }
);

export default apiClient;
