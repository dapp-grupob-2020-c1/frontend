<template>
  <PageContainer :title="pageTitle" :breadcrumb-items="breadcrumbItems">
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
import ProductDetails from "../../../components/ProductDetails";
import PageContainer from "../../../components/PageContainer";
export default {
  name: "ProductsList",
  components: { PageContainer, ProductDetails },
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
  methods: {}
};
</script>
