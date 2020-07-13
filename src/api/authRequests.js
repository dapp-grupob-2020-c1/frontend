import { httpClient } from "./httpClient";

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
    method: "GET",
    url: "/auth/signup",
    params: {
      name,
      email,
      password
    }
  });
}

export { loginRequest, registerRequest };
