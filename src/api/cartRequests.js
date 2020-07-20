async function getOldCartsRequest(httpClient) {
  return httpClient({
    method: "GET",
    url: "/cart/historic",
  });
}

async function getActiveCartRequest(httpClient) {
  return httpClient({
    method: "GET",
    url: "/cart",
  });
}

async function createCartRequest(httpClient, locationId) {
  return httpClient({
    method: "POST",
    url: "/cart",
    params: {
      locationId,
    },
  });
}

async function addProductToCartRequest(httpClient, { productId, amount }) {
  return httpClient({
    method: "POST",
    url: "/cart/product",
    data: {
      productId,
      amount,
    },
  });
}

async function deleteProductFromCartRequest(httpClient, productId) {
  return httpClient({
    method: "DELETE",
    url: "/cart/product",
    data: {
      productId,
    },
  });
}

async function checkoutCartRequest(httpClient, cartPurchase) {
  return httpClient({
    method: "POST",
    url: "/cart/purchase",
    data: {
      cartPurchase,
    },
  });
}

export {
  getOldCartsRequest,
  getActiveCartRequest,
  createCartRequest,
  addProductToCartRequest,
  deleteProductFromCartRequest,
  checkoutCartRequest,
};
