<template>
  <PageContainer :title="pageTitle" :breadcrumb-items="breadcrumbItems">
    <div class="actions my-2">
      <b-button
        variant="primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${this.$route.params.shopId}/products/create`"
      >
        <b-icon-plus-square />
        {{ $t("shop.createNewProduct") }}
      </b-button>

      <b-button
        variant="outline-primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${this.$route.params.shopId}/products/createMany`"
      >
        <b-icon-check2-square />
        {{ $t("shop.createManyProducts") }}
      </b-button>

      <download-csv :data="productsList" class="btn btn-lg btn-outline-primary">
        <b-icon-arrow-down-square />
        {{ $t("shop.downloadCsv") }}
      </download-csv>
    </div>
    <b-list-group v-if="productsList.length">
      <b-list-group-item v-for="product in productsList" :key="product.id">
        <ProductDetails :product="product" />
        <div class="actions mt-3 pt-3 border-top border-light">
          <b-button
            variant="outline-primary"
            class="mr-2"
            :to="`/shops/${$route.params.shopId}/products/${product.id}/edit`"
          >
            <b-icon-pencil-square />
            {{ $t("product.editDetails") }}
          </b-button>
          <b-button
            class="mr-2"
            variant="outline-danger"
            @click="handleProductDelete(product)"
          >
            <b-icon-x-square />
            {{ $t("product.delete") }}
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("product.listEmpty") }}
    </b-alert>
  </PageContainer>
</template>

<script>
import ProductDetails from "../../../components/ProductDetails";
import PageContainer from "../../../components/PageContainer";

// Vue JSON CSV
import JsonCSV from "vue-json-csv";

export default {
  components: { PageContainer, ProductDetails, downloadCsv: JsonCSV },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shop.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shop.viewDetails"),
          to: `/shops/${this.$route.params.shopId}/`
        },
        {
          text: this.$t("shop.viewProducts")
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("products/setProducts", []);
    this.$store.dispatch("products/getShopProducts", this.$route.params.shopId);
  },
  computed: {
    productsList() {
      return this.$store.state.products.products;
    },
    pageTitle() {
      const shopName = this.$store.getters["user/findShop"](
        this.$route.params.shopId
      ).name;
      return this.$t("shop.productsForShop", { shopName });
    }
  },
  methods: {
    handleProductDelete(product) {
      this.$store.dispatch("products/deleteProduct", {
        shopId: this.$route.params.shopId,
        productId: product.id
      });
      this.$store.commit("products/setProducts", []);
      this.$store.dispatch(
        "products/getShopProducts",
        this.$route.params.shopId
      );
    }
  }
};
</script>
