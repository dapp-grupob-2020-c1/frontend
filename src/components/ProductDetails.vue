<template>
  <div class="product-details">
    <div class="row">
      <div class="col">
        <h2 class="h3">{{ product.name }}</h2>
        <p>{{ product.brand }}</p>
        <p class="lead">{{ product.price }}</p>
      </div>
      <div class="col-md-6 col-lg-3" v-if="product.shop">
        <ShopDetails :shop="product.shop" />
      </div>
    </div>
    <b-button variant="primary" @click="handleAddToCart" v-if="buy">
      {{ $t("product.addToCart") }}
    </b-button>
  </div>
</template>

<script>
import { defaultToasterOptions } from "../config/options";
import ShopDetails from "./ShopDetails";

export default {
  name: "ProductDetails",
  components: { ShopDetails },
  props: {
    product: {
      type: Object,
      required: true
    },
    buy: {
      type: Boolean,
      default: false
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
      // TODO this.$store.dispatch("buyer/addItemToCart", cartItem);
      this.$root.$bvToast.toast(cartMessage, defaultToasterOptions);
    }
  }
};
</script>
