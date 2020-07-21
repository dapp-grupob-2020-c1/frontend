async function searchProductsRequest(httpClient, searchParams) {
  // required search params
  const finalSearchParams = {
    locationId: searchParams.locationId,
  };

  // optional params
  if (searchParams.keyword) {
    finalSearchParams.keyword = searchParams.keyword;
  }
  if (searchParams.categories) {
    finalSearchParams.categories = searchParams.categories;
  }

  // pagination params
  if (searchParams.page) {
    finalSearchParams.page = searchParams.page;
  }
  if (searchParams.size) {
    finalSearchParams.size = searchParams.size;
  }
  if (searchParams.order) {
    finalSearchParams.order = searchParams.order;
  }

  return httpClient({
    method: "GET",
    url: "/product/search",
    params: finalSearchParams,
  });
}

async function getProductRequest(httpClient, productId) {
  return httpClient({
    method: "GET",
    url: "/product",
    params: {
      productId,
    },
  });
}

async function createProductRequest(httpClient, productInfo) {
  return httpClient({
    method: "POST",
    url: "/product",
    data: productInfo,
  });
}

async function createManyProductsRequest(httpClient, productsInfo) {
  return httpClient({
    method: "POST",
    url: "/products",
    data: productsInfo,
  });
}

async function deleteProductRequest(httpClient, { shopId, productId }) {
  return httpClient({
    method: "DELETE",
    url: "/product",
    params: {
      shopId: shopId,
      productId: productId,
    },
  });
}

export {
  searchProductsRequest,
  getProductRequest,
  createProductRequest,
  createManyProductsRequest,
  deleteProductRequest,
};
