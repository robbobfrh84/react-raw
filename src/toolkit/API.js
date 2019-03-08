import axios from "axios";

const NasaMarsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=";
const APIKEY = "&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

export default {
  search: function(sol, page) {
    const url = NasaMarsURL + sol + "&page="+ page + APIKEY
    return axios.get(url);
  }
}
