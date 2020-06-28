<template>
  <b-container class="my-5">
    <h1 class="h1">Dashboard</h1>
    <!-- Locations -->
    <div class="my-4">
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

    <!-- Compras Anteriores -->
    <div class="my-4">
      <h2 class="h3">Compras Anteriores</h2>
      <p>
        Podés llevar un registro de todas las operaciones registradas en el
        sistema
      </p>
      <b-list-group v-if="operationsList.length">
        <b-list-group-item
          v-for="(location, index) in operationsList"
          :key="index"
        >
          <p>Compra #{{ index }}</p>
          <pre>{{ location }}</pre>
          <b-button variant="text">Ver Detalles</b-button>
        </b-list-group-item>
      </b-list-group>
      <b-alert variant="info" show v-else>
        No hay ninguna operación registrada. Comprar.
      </b-alert>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    userType() {
      return this.$store.state.user.type;
    },
    locationsList() {
      return this.$store.state.customer.locations;
    },
    operationsList() {
      return [
        {
          uuid: "15c506b2-ea51-4686-86a4-6b2d9ea83b74",
          date: "2020-06-28T23:40:03.358Z"
        }
      ];
    }
  }
};
</script>
