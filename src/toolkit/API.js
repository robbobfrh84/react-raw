// const NasaMarsURL = "https://api.giphy.com/v1/gifs/search?q=";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";


import axios from "axios";

const NasaMarsURL = "https://api.giphy.com/v1/gifs/search?q=";
const Sol = 1000
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

const Url = NasaMarsURL +

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo");
  }
};
