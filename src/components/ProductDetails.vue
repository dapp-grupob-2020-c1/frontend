<template>
  <div class="product-details">
    <h2 class="h3">{{ product.name }}</h2>
    <p>{{ product.brand }}</p>
    <p class="lead">{{ product.price }}</p>
  </div>
</template>

<script>
import { defaultToasterOptions } from "../config/options";

export default {
  name: "ProductDetails",
  props: {
    product: {
      type: Object,
      required: true,
    },
    buy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {},
  methods: {
    handleAddToCart() {
      const cartItem = {
        product: this.product.name,
        quantity: this.quantity,
      };
      const cartMessage = `${cartItem.quantity} x ${cartItem.product} ${this.$t(
        "product.addedToCart"
      )}`;
      // TODO this.$store.dispatch("buyer/addItemToCart", cartItem);
      this.$root.$bvToast.toast(cartMessage, defaultToasterOptions);
    },
  },
};
</script>
