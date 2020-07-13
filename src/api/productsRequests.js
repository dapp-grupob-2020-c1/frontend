import { httpClient } from "./httpClient";

async function searchProductsRequest(searchParams) {
  // required search params
  const finalSearchParams = {
    locationId: searchParams.locationId
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
    params: finalSearchParams
  });
}

async function getProductRequest(productId) {
  return httpClient({
    method: "GET",
    url: "/product",
    params: {
      productId
    }
  });
}

async function createProductRequest(productInfo) {
  return httpClient({
    method: "POST",
    url: "/product",
    data: productInfo
  });
}

async function createManyProductsRequest(productsInfo) {
  return httpClient({
    method: "POST",
    url: "/products",
    data: productsInfo
  });
}

async function deleteProduct({ shopId, productId }) {
  return httpClient({
    method: "DELETE",
    url: "/products",
    params: {
      shopId,
      productId
    }
  });
}

export {
  searchProductsRequest,
  getProductRequest,
  createProductRequest,
  createManyProductsRequest,
  deleteProduct
};
