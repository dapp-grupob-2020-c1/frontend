<template>
  <PageContainer>
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="`/shops/${this.$route.params.id}/`">
        {{ $t("shop.viewDetails") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active>
        {{ $t("shop.viewProducts") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.viewProducts") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <b-list-group v-if="productsList.length">
      <b-list-group-item v-for="product in productsList" :key="product.name">
        <ProductDetails :product="product" />
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("product.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button
        variant="primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${this.$route.params.id}/products/create`"
      >
        {{ $t("shop.createNewProduct") }}
      </b-button>

      <b-button
        variant="outline-primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${this.$route.params.id}/products/createMany`"
      >
        {{ $t("shop.createManyProducts") }}
      </b-button>

      <b-button variant="outline-primary" size="lg" class="mr-2" disabled>
        {{ $t("shop.downloadCsv") }}
      </b-button>
    </div>
  </PageContainer>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
import { getShopRequest } from "../../api/shopRequests";
import ProductDetails from "../../components/ProductDetails";
import PageContainer from "../../components/PageContainer";
export default {
  name: "ProductsList",
  components: { PageContainer, ProductDetails, ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      shopDetails: null
    };
  },
  async mounted() {
    const response = await getShopRequest(this.$route.params.id);
    this.shopDetails = response.data;
  },
  computed: {
    productsList() {
      if (!this.shopDetails) {
        return [];
      }
      return this.shopDetails.products;
    }
  },
  methods: {}
};
</script>
