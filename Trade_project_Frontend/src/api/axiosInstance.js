import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Замість localhost вказати свій бекенд-URL
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            alert(`Error: ${error.response.data.message}`);
        } else if (error.request) {
            alert('Error: No response from the server');
        } else {
            alert(`Error: ${error.message}`);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
