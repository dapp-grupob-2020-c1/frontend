<template>
  <div>
    <h2 class="h3">Ubicaciones</h2>
    <p>
      Las direcciones cargadas por el cliente son usadas para calcular los
      envíos de productos.
    </p>
    <b-list-group v-if="locationsList.length">
      <b-list-group-item
        v-for="(location, index) in locationsList"
        :key="index"
      >
        <pre>{{ location }}</pre>
      </b-list-group-item>
    </b-list-group>
    <b-alert variant="info" show v-else>
      No hay ninguna ubicación registrada.
    </b-alert>
    <div class="actions my-2">
      <b-button variant="outline-primary">Agregar Ubicación</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuyerLocationList",
  computed: {
    locationsList() {
      return this.$store.state.customer.locations;
    }
  }
};
</script>
