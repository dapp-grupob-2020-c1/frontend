<template>
  <b-container class="my-5">
    <h1 class="h1">Shopping Cart</h1>
    <!-- Alertas -->
    <div class="my-4">
      <h2 class="h3">Alertas</h2>
      <p>WIP: muestro las alertas de la compra</p>
    </div>

    <!-- Productos -->
    <div class="my-4">
      <h2 class="h3">Listado de Productos</h2>
      {{ $store.state.buyer.shoppingCartItems }}
    </div>

    <!-- Envio -->
    <div class="my-4">
      <h2 class="h3">Opciones de Envio</h2>
      <p>WIP: muestro distintas opciones de envio</p>
    </div>

    <!-- Pagos -->
    <div class="my-4">
      <h2 class="h3">Medios de Pago</h2>
      <p>WIP: muestro posibles opciones de pago</p>
    </div>

    <!-- Finalizar -->
    <div class="my-4">
      <b-button variant="primary" size="lg">Confirmar Compra</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "ShoppingCart"
};
</script>
