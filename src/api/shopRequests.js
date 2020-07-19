async function getShopsRequest(httpClient) {
  return httpClient({
    method: "GET",
    url: "/user/myshops"
  });
}

async function getShopRequest(httpClient, shopId) {
  return httpClient({
    method: "GET",
    url: "/shop",
    params: {
      shopId
    }
  });
}

async function createShopRequest(httpClient, newShopData) {
  return httpClient({
    method: "POST",
    url: "/shop",
    data: {
      name: newShopData.name,
      imageUrl: newShopData.imageUrl,
      categories: newShopData.categories,
      location: newShopData.location,
      days: newShopData.days,
      openingHour: newShopData.openingHour,
      closingHour: newShopData.closingHour,
      paymentMethods: newShopData.paymentMethods,
      deliveryRadius: newShopData.deliveryRadius
    }
  });
}

async function editShopRequest(httpClient, newShopData) {
  return httpClient({
    method: "PATCH",
    url: "/shop",
    data: {
      id: newShopData.id,
      name: newShopData.name,
      imageUrl: newShopData.imageUrl,
      categories: newShopData.categories,
      location: newShopData.location,
      days: newShopData.days,
      openingHour: newShopData.openingHour,
      closingHour: newShopData.closingHour,
      paymentMethods: newShopData.paymentMethods,
      deliveryRadius: newShopData.deliveryRadius
    }
  });
}

async function deleteShopRequest(httpClient, shopId) {
  return httpClient({
    method: "DELETE",
    url: "/shop",
    params: {
      shopId: shopId
    }
  });
}

export {
  getShopsRequest,
  createShopRequest,
  getShopRequest,
  editShopRequest,
  deleteShopRequest
};
