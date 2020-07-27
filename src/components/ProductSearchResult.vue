<template>
  <div class="product-search-results-item d-flex flex-column">
    <ProductDetails :product="product" />
    <ShopDetails :shop="product.shop" class="mt-2" />
    <div class="d-flex flex-column-reverse h-100 w-100">
      <b-input-group>
        <b-form-input type="number" min="1" max="12" v-model="amount" />
        <b-input-group-append>
          <b-button
            variant="outline-primary"
            @click.prevent="handleAddProductToCart"
          >
            <b-icon-cart-fill />
            {{ $t("product.addToCart") }}
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
import ShopDetails from "./ShopDetails";
import ProductDetails from "./ProductDetails";

export default {
  components: { ProductDetails, ShopDetails },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amount: 1,
    };
  },
  computed: {},
  methods: {
    handleAddProductToCart() {
      this.$store.dispatch("cart/addProductToCart", {
        productId: this.product.id,
        amount: this.amount,
      });
    },
  },
};
</script>
