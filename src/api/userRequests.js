import { httpClient } from "./httpClient";

async function getCurrentUserRequest() {
  return httpClient({
    method: "GET",
    url: "/user/me"
  });
}

async function getLocationsRequest() {
  return httpClient({
    method: "GET",
    url: "/user/locations"
  });
}

async function addLocationRequest({ address, latitude, longitude }) {
  return httpClient({
    method: "POST",
    url: "/user/location",
    params: {
      address: address,
      latitude: String(latitude),
      longitude: String(longitude)
    }
  });
}

async function deleteLocationRequest() {}

async function getShopsRequest() {
  return httpClient({
    method: "GET",
    url: "/user/myshops"
  });
}

export {
  getCurrentUserRequest,
  getLocationsRequest,
  addLocationRequest,
  deleteLocationRequest,
  getShopsRequest
};
