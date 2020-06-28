<template>
  <b-card title="Ubicaciones">
    <p>
      Las direcciones cargadas por el cliente son usadas para calcular los
      envíos de productos.
    </p>
    <b-list-group v-if="locations.length">
      <b-list-group-item v-for="(location, index) in locations" :key="index">
        {{ location }}
      </b-list-group-item>
    </b-list-group>
    <b-alert variant="info" show>
      No hay ninguna ubicación. Cargar.
    </b-alert>
  </b-card>
</template>

<script>
export default {
  name: "CustomerLocationsCard",
  computed: {
    locations() {
      return this.$store.state.customer.locations;
    }
  },
  methods: {}
};
</script>
