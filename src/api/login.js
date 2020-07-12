const axios = require("axios").default;

async function loginUser({ email, password }) {
  const requestUrl = new URL(
    "/auth/login",
    process.env.VUE_APP_API_URL
  ).toString();

  return axios({
    method: "POST",
    url: requestUrl,
    data: {
      email,
      password
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

export { loginUser };
