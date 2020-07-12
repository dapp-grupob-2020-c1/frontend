<template>
  <b-card :title="product.name">
    <pre>
    {{ product }}
    </pre>
    <b-button variant="primary" @click="handleAddToCart">
      {{ $t("product.addToCart") }}
    </b-button>
  </b-card>
</template>

<script>
import { defaultToasterOptions } from "../config/options";

export default {
  name: "ProductListItem",
  props: {
    product: {
      required: true
    }
  },
  data() {
    return {
      quantity: 1
    };
  },
  computed: {},
  methods: {
    handleAddToCart() {
      const cartItem = {
        product: this.product.name,
        quantity: this.quantity
      };
      const cartMessage = `${cartItem.quantity} x ${cartItem.product} ${this.$t(
        "product.addedToCart"
      )}`;
      this.$store.dispatch("buyer/addItemToCart", cartItem);
      this.$root.$bvToast.toast(cartMessage, defaultToasterOptions);
    }
  }
};
</script>
