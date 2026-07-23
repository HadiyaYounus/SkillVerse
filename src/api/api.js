import axios from "axios";

const API = axios.create({
  baseURL: "https://skill-verse-z8mf.vercel.app/api",
});

export default API;