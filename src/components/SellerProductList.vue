<template>
  <div>
    <p>{{ $t("dashboard.sellerProducts.description") }}</p>
    <b-list-group v-if="productsList.length">
      <b-list-group-item v-for="(product, index) in productsList" :key="index">
        <p>#{{ index }}</p>
        <pre>{{ product }}</pre>
        <b-button variant="text">
          {{ $t("dashboard.sellerProducts.showDetails") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else>
      {{ $t("dashboard.sellerProducts.empty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button class="mr-2" variant="primary" to="/createProduct">
        {{ $t("dashboard.sellerProducts.createProduct") }}
      </b-button>
      <b-button class="mr-2" variant="outline-primary" to="/uploadProducts">
        {{ $t("dashboard.sellerProducts.uploadFile") }}
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SellerProductList",
  computed: {
    productsList() {
      return this.$store.state.seller.products;
    }
  }
};
</script>
