import axios from "axios";

const NasaMarsURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity"
const APIKEY = "api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo"
const Photos = "/photos?sol="

export default {

  photos: function(sol, page) {
    const url = NasaMarsURL + Photos + sol + "&page="+ page +"&"+ APIKEY
    return axios.get(url)
  },

  manifest: function(sol, page) {
    const url = NasaMarsURL +"/?"+ APIKEY
    return axios.get(url)
  },

  BLOCK: (function(){
    let doBlock = localStorage.blockMarsAPI
    if (doBlock === "true") {
      console.log("Your currently have localStorage.blockMarsAPI equal to true. Set it to false 'localStorage.blockMarsAPI = false' if you want to view the mars api in action.")
    }
    return doBlock === "true"
  })()

}
