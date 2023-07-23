/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:8080'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const interceptorRequest = axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const interceptorResponse = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    // TODO: letter i will fixed it
                    localStorage.removeItem('token');
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(interceptorRequest);
            axiosSecure.interceptors.request.eject(interceptorResponse);
        };
    }, [navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;
