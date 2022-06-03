import axiosClient from "./axiosClient";

const url = '';

const bookingApi = {

    book: (params) => {
        return axiosClient.post(url, params);
    },
   
    cancel: (params) => {
        return axiosClient.get(url, params);
    },

    update: (params) => {
        return axiosClient.post(url, params);
    }
}

export default bookingApi;
