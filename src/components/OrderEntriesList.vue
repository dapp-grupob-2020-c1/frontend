<template>
  <div class="order-entries-list" v-if="$store.state.cart.active">
    <!-- Entries List -->
    <div
      class="order-entry row align-items-center mb-2 border-bottom"
      v-for="(entry, index) in $store.state.cart.active.entries"
      :key="index"
    >
      <div class="col-auto">
        <b-button
          size="sm"
          variant="outline-danger"
          @click="handleDeleteEntry(entry)"
        >
          <b-icon-x />
        </b-button>
      </div>
      <div class="col">
        <p class="mb-1">
          {{ entry.product.name }}
          <span class="text-muted">&dash; {{ entry.product.brand }}</span>
        </p>
        <p class="mb-1">{{ entry.quantity }} x $ {{ entry.product.price }}</p>
      </div>
      <div class="col-4 col-md-3 text-right">
        <p class="lead m-0">$ {{ entry.quantity * entry.product.price }}</p>
      </div>
    </div>
    <!-- Total -->
    <div
      class="row font-weight-bold border-top border-dark align-items-baseline py-2"
    >
      <div class="col">
        <p class="lead">Total:</p>
      </div>
      <div class="col-3 text-right">
        <p class="lead font-weight-bold">
          $ {{ $store.state.cart.active.total }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    async handleDeleteEntry(entry) {
      await this.$store.dispatch(
        "cart/deleteProductFromCart",
        entry.product.id
      );
      // go back to dashboard if it was the last product
      if (!this.$store.state.cart.active.entries.length) {
        this.$store.dispatch("messages/showMessage", "cart.emptyCart");
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>
