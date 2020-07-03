<template>
  <b-card :title="product.name">
    <pre>
    {{ product }}
    </pre>
    <b-button variant="primary" @click="handleAddToCart">
      Agregar al Carrito
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
    }
  }
};
</script>
