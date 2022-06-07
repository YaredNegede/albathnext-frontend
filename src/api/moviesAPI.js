import axiosClient from "./axiosClient";


const MovieApi = {
    discover: (query) => {
        return axiosClient.get(`movie/discover`);
    },

    getMoviesList: (query) => {
        return axiosClient.get(`movie/query?query=${query}`);
    },
   
    search: (query) => {
        return axiosClient.get(`movie/query?query=${query}`);
    },

    detail: (id) => {
        return axiosClient.get(`movie/getDetail/${id}`);
    }

}

export default MovieApi;