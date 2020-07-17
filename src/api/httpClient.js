import store from "../store/index";
const axios = require("axios").default;

// get token from Store
const token = store.state.auth.token;

// configure authenticated axios instance
const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export { httpClient };
