import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
    if (config.headers) {
        // config.headers["X-MARS-SID"] = sid;

        if (config.data instanceof FormData) config.headers["Content-Type"] = "multipart/form-data";
        else config.headers["Content-Type"] = "application/json";
    }

    return config
});

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.status === 401) window.location.replace('/')
        else throw error
    }
);

export default httpClient;