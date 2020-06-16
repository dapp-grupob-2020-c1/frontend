async function getSearch(query) {
  const api_url = process.env.VUE_API_URL || "http://localhost:8080/api/";
  const requestUrl = new URL("/api/search", api_url);

  requestUrl.searchParams.set("locationId", "1");
  if (query) {
    requestUrl.searchParams.set("keyword", query);
  }
  let response = await fetch(requestUrl.toString());
  let data = await response.json();
  console.log(data);
  return data;
}

export { getSearch };
