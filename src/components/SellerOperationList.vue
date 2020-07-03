<template>
  <div>
    <h2 class="h3">Operaciones</h2>
    <p>
      Listado de las ventas registradas en el sistema.
    </p>
    <b-list-group v-if="operationsList.length">
      <b-list-group-item
        v-for="(operation, index) in operationsList"
        :key="index"
      >
        <p>Venta #{{ index }}</p>
        <pre>{{ operation }}</pre>
        <b-button variant="text">Ver Detalles</b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else>
      No hay ninguna venta registrada hasta el momento.
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "SellerOperationList",
  computed: {
    operationsList() {
      return this.$store.state.seller.operations;
    }
  }
};
</script>
