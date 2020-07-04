<template>
  <b-nav-item to="/cart" v-if="$store.state.auth.type === 'buyer'">
    Carrito {{ cartLengthMessage }}
  </b-nav-item>
</template>

<script>
export default {
  name: "NavbarShoppingCart",
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    cart() {
      return this.$store.state.buyer.shoppingCartItems;
    },
    cartLengthMessage() {
      if (!this.cart.length) {
        return "vacío";
      }
      return `(${this.cart.length})`;
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
