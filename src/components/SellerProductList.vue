<template>
  <div>
    <h2 class="h3">Productos</h2>
    <p>
      Listado de productos cargados en el sistema.
    </p>
    <b-list-group v-if="productsList.length">
      <b-list-group-item v-for="(product, index) in productsList" :key="index">
        <p>Producto #{{ index }}</p>
        <pre>{{ product }}</pre>
        <b-button variant="text">Ver Detalles</b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else>
      No hay ningún producto cargado hasta el momento.
    </b-alert>
    <p>
      <b-button variant="primary">Cargar Producto</b-button>
    </p>
  </div>
</template>
<script>
export default {
  name: "SellerProductList",
  computed: {
    productsList() {
      return this.$store.state.seller.products;
    }
  }
};
</script>
