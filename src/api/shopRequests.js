import { httpClient } from "./httpClient";

async function getShopRequest(shopId) {
  return httpClient({
    method: "GET",
    url: "/shop",
    params: {
      shopId
    }
  });
}

async function createShopRequest(newShopData) {
  return httpClient({
    method: "POST",
    url: "/shop",
    data: {
      name: newShopData.name,
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

async function editShopRequest(newShopData) {
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

async function deleteShopRequest(shopId) {
  return httpClient({
    method: "DELETE",
    url: "/shop",
    params: {
      shopId: shopId
    }
  });
}

export {
  createShopRequest,
  getShopRequest,
  editShopRequest,
  deleteShopRequest
};
