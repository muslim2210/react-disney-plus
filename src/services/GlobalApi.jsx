import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5a9c8fab90c7511337454191383e16e1";

//https://api.themoviedb.org/3/trending/all/day?api_key=5a9c8fab90c7511337454191383e16e1

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {
  getTrendingVideos,
};
