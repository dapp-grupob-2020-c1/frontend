const axios = require("axios").default;

// configure axios instance
const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

async function loginRequest({ email, password }) {
  return httpClient({
    method: "POST",
    url: "/auth/login",
    data: {
      email,
      password
    }
  });
}

async function registerRequest({ name, email, password }) {
  return httpClient({
    method: "POST",
    url: "/auth/signup",
    data: {
      name,
      email,
      password
    }
  });
}

export { loginRequest, registerRequest };
