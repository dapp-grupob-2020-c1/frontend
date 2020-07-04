<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("cart.cart") }}</h1>
    <!-- Alertas -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.alerts") }}</h2>
      <p>{{ $t("cart.alertsDescription") }}</p>
    </div>

    <!-- Productos -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.productsList") }}</h2>
      {{ $store.state.buyer.shoppingCartItems }}
    </div>

    <!-- Envio -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.shippingOptions") }}</h2>
      <p>{{ $t("cart.shippingOptionsDescription") }}</p>
    </div>

    <!-- Pagos -->
    <div class="my-4">
      <h2 class="h3">{{ $t("cart.paymentMethods") }}</h2>
      <p>{{ $t("cart.paymentMethodsDescription") }}</p>
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
