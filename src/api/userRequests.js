import store from "../store/index";
const axios = require("axios").default;

async function getCurrentUserRequest() {
  const requestUrl = new URL(
    "/user/me",
    process.env.VUE_APP_API_URL
  ).toString();

  // get token from Store
  const token = store.state.auth.token;

  return axios({
    method: "GET",
    url: requestUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

async function getLocationsRequest() {
  const requestUrl = new URL(
    "/user/locations",
    process.env.VUE_APP_API_URL
  ).toString();

  // get token from Store
  const token = store.state.auth.token;

  return axios({
    method: "GET",
    url: requestUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

async function addLocationRequest({ address, latitude, longitude }) {
  const requestUrl = new URL(
    "/user/location",
    process.env.VUE_APP_API_URL
  ).toString();

  // get token from Store
  const token = store.state.auth.token;

  return axios({
    method: "POST",
    url: requestUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    params: {
      address: address,
      latitude: String(latitude),
      longitude: String(longitude)
    }
  });
}

export { getCurrentUserRequest, getLocationsRequest, addLocationRequest };
