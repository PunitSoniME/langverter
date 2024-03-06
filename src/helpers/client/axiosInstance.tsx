'use client'

import axios from 'axios';

const isProduction = process.env.NEXT_NODE_ENV === 'production';

const axiosInstance = () => {
    const headers: any = {
        'Content-Type': 'application/json'
    };

    // if (localStorage.token) {
    //     headers.Authorization = localStorage.token;
    // }

    const axiosInstanceInner = axios.create({
        baseURL: `${location.origin}/api`,
        // headers
    });

    axiosInstanceInner.defaults.timeout = 1000 * 60  //  1000 miliseconds * your desired seconds

    axiosInstanceInner.interceptors.request.use((request) => {
        return request;
    }, error => {
        return Promise.reject(error);
    });

    axiosInstanceInner.interceptors.response.use((response) =>
        new Promise((resolve) => {
            resolve(response);
        }), (error) => {

            if (error.code === 'ECONNABORTED') {
                return new Promise((_, reject) => {
                    reject({ type: "error", message: error?.message });
                });
            }

            if (error.code === 'ERR_BAD_RESPONSE') {
                return new Promise((_, reject) => {
                    reject({ type: "error", message: error?.response?.data });
                })
            }

            if (error.message === "Network Error") {
                return new Promise((_, reject) => {
                    reject({ type: "error", message: "Api Not Working" });
                })
            }

            //  Show original error when development environment
            let { message } = error?.response?.data || {};

            //  Show status code message for production environment
            if (isProduction) {
                message = error?.response?.statusText || 'Unexpected error occured';
            }

            if (error.code === "ERR_BAD_REQUEST") {
                return new Promise((_, reject) => {
                    reject({ type: "error", message: message });
                })
            }

            return new Promise((_, reject) => {
                console.log('layout error');
                console.log(error);
                reject({ type: "error", message: message });
            });

        }
    );

    return axiosInstanceInner;
}

export default axiosInstance;