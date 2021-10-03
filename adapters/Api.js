import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';

const Api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default Api;
