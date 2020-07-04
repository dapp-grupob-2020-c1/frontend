<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("cart.cart") }}</h1>
    <!-- Alertas -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.alerts") }}</h2>
      <p>{{ $t("cart.alerts_description") }}</p>
    </div>

    <!-- Productos -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.products_list") }}</h2>
      {{ $store.state.buyer.shoppingCartItems }}
    </div>

    <!-- Envio -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.shipping_options") }}</h2>
      <p>{{ $t("cart.shipping_options_description") }}</p>
    </div>

    <!-- Pagos -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.payment_methods") }}</h2>
      <p>{{ $t("cart.payment_methods_description") }}</p>
    </div>

    <!-- Finalizar -->
    <div class="my-4">
      <b-button variant="primary" size="lg">{{ $t("cart.checkout") }}</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "ShoppingCart"
};
</script>
