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
        return axiosClient.get(url+'paged',page);
    },

    book: (params) => {
        return axiosClient.post(url, params);
    },
   
    cancel: (params) => {
        return axiosClient.delete(url+params.id);
    },

    update: (params) => {
       
        return axiosClient.put(url+params.id, params);
    }
}

export default bookingApi;
