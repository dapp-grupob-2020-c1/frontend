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
      this.$store.dispatch("buyer/addItemToCart", cartItem);
      this.$root.$bvToast.toast(
        `${cartItem.quantity} x ${cartItem.product} ${this.$t(
          "product.addedToCart"
        )}`,
        {
          variant: "success",
          toaster: "b-toaster-top-right",
          noCloseButton: true,
          autoHideDelay: 4000
        }
      );
    }
  }
};
</script>
