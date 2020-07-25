<template>
  <div class="product-details">
    <b-media vertical-align="center">
      <template v-slot:aside>
        <b-img fluid rounded :src="productImage" width="128" height="128" />
      </template>
      <p class="h3 font-weight-light text-muted float-right">
        $ {{ product.price }}
      </p>
      <h2 class="h3">{{ product.name }}</h2>
      <p>{{ product.brand }}</p>
    </b-media>
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
  computed: {
    productImage() {
      if (!this.product.imageUrl) {
        return require("../assets/shop-placeholder.png");
      }
      return this.product.imageUrl;
    },
  },
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
