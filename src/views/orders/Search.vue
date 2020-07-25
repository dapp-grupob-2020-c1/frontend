<template>
  <PageContainer
    :title="$t('order.searchProducts')"
    :breadcrumb-items="breadcrumbItems"
    :show-cart="Boolean($store.getters['cart/hasActiveAndFilledCart'])"
  >
    <b-card class="my-3">
      <form @submit.prevent="handleSearch">
        <b-input-group>
          <b-form-input
            id="query"
            name="query"
            v-model="searchQuery"
          ></b-form-input>
          <template v-slot:append>
            <b-button block variant="primary" type="submit">
              {{ $t("search.beginSearch") }}
            </b-button>
          </template>
        </b-input-group>
      </form>
    </b-card>

    <b-overlay :show="$store.state.requests.loading">
      <div class="row" v-if="searchResults.length">
        <div
          class="col-12 col-lg-6 mb-3"
          v-for="product in searchResults"
          :key="product.id"
        >
          <b-card class="h-100">
            <ProductSearchResult class="h-100" :product="product" />
          </b-card>
        </div>
      </div>
    </b-overlay>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";
import ProductSearchResult from "../../components/ProductSearchResult";

export default {
  components: { ProductSearchResult, PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("order.search"),
        },
      ],
      searchQuery: null,
    };
  },
  beforeMount() {
    // go to create location if there is none
    if (!this.$store.state.user.locations.length) {
      this.$router.push("/locations/create");
      this.$store.dispatch("messages/showMessage", "location.locationNeeded");
      return;
    }

    // if there is no active cart, create one
    if (!this.$store.state.cart.active) {
      this.$router.push("/orders/create");
      this.$store.dispatch("messages/showMessage", "order.activeOrderNeeded");
      return;
    }

    // begin search
    this.$store.dispatch("cart/getSearchProducts", {});
  },
  computed: {
    searchResults() {
      return this.$store.state.cart.searchResults;
    },
  },
  methods: {
    handleAddProductToCart(product) {
      console.log(product);
    },
    handleSearch() {
      console.log("do search");
      this.$store.dispatch("cart/getSearchProducts", {
        keyword: this.searchQuery,
      });
    },
    handleCancel() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
