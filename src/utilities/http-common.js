import axios from "axios";
/** This function return http object with base url set for loading data from NYT API */
export default axios.create({
  baseURL: "http://api.nytimes.com/svc",
  headers: {
    "Content-type": "application/json"
  }
});