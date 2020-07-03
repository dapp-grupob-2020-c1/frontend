<template>
  <div>
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
    <b-alert show v-else>
      No hay ninguna operación registrada hasta el momento
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "BuyerOperationList",
  computed: {
    operationsList() {
      return this.$store.state.buyer.operations;
    }
  }
};
</script>
