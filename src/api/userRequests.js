async function getCurrentUserRequest(httpClient) {
  return httpClient({
    method: "GET",
    url: "/user/me"
  });
}

async function getLocationsRequest(httpClient) {
  return httpClient({
    method: "GET",
    url: "/user/locations"
  });
}

async function createLocationRequest(httpClient, location) {
  return httpClient({
    method: "POST",
    url: "/user/location",
    params: {
      address: location.address,
      latitude: String(location.latitude),
      longitude: String(location.longitude)
    }
  });
}

async function deleteLocationRequest(httpClient, locationId) {
  return httpClient({
    method: "DELETE",
    url: "/user/location",
    params: {
      locationId
    }
  });
}

export {
  getCurrentUserRequest,
  getLocationsRequest,
  createLocationRequest,
  deleteLocationRequest
};
