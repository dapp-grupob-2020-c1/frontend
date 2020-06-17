async function getSearch(searchQuery) {
  const apiBaseUrl = process.env.VUE_APP_API_URL;
  const requestUrl = new URL("/api/search", apiBaseUrl);

  // adds searchQuery parameters
  requestUrl.searchParams.set("locationId", "1");
  if (searchQuery) {
    requestUrl.searchParams.set("keyword", searchQuery);
  }

  // makes requests, wait response, return data
  let response = await fetch(requestUrl.toString());
  let data = await response.json();
  return data;
}

export { getSearch };
