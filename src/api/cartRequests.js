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
      locationId
    }
  });
}

async function addProductToCartRequest(httpClient, { productId, amount }) {
  return httpClient({
    method: "POST",
    url: "/cart/product",
    data: {
      productId,
      amount
    }
  });
}

async function checkoutCartRequest(httpClient, cartPurchase) {
  return httpClient({
    method: "POST",
    url: "/cart/purchase",
    data: {
      cartPurchase,
    }
  });
}



async function createManyProductsRequest(httpClient, productsInfo) {
  return httpClient({
    method: "POST",
    url: "/products",
    data: productsInfo
  });
}

async function deleteProductRequest(httpClient, { shopId, productId }) {
  return httpClient({
    method: "DELETE",
    url: "/product",
    params: {
      shopId: shopId,
      productId: productId
    }
  });
}

export {
  searchProductsRequest,
  getProductRequest,
  createProductRequest,
  createManyProductsRequest,
  deleteProductRequest
};
