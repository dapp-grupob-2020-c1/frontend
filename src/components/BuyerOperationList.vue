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
    <b-alert variant="info" show v-else>
      No hay ninguna operación registrada. Comprar.
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "BuyerOperationList",
  computed: {
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
