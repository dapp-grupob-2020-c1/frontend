async function registerCustomer(customerData) {
  const requestUrl = new URL(
    "/api/customer",
    process.env.VUE_APP_API_URL
  ).toString();

  const requestData = new FormData();
  requestData.append("name", customerData.name);
  requestData.append("email", customerData.email);
  requestData.append("password", customerData.password);

  // makes requests, wait response, return data
  let response = await fetch(requestUrl, {
    method: "POST",
    body: requestData
  });

  return response;
}

export { registerCustomer };
