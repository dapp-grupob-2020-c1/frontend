const axios = require("axios").default;

async function registerUser({ name, email, password }) {
  const requestUrl = new URL(
    "/auth/signup",
    process.env.VUE_APP_API_URL
  ).toString();

  console.log("registerUser requestUrl built", requestUrl);

  const newUSerInformation = {
    name,
    email,
    password
  };

  return axios({
    method: "POST",
    url: requestUrl,
    data: newUSerInformation,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
}

export { registerUser };
