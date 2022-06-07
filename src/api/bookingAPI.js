import axiosClient from "./axiosClient";

const url = 'booking/';

const bookingApi = {

    load: () => {
        const page = {
            "page": 0,
            "size": 10,
            "sort": [
              "ASC"
            ]
          }
        return axiosClient.post(url+'paged',page);
    },

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
