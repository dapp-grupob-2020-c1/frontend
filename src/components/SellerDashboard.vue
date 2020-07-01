<template>
  <div id="seller-dashboard">
    <!-- Productos -->
    <div>
      <h2 class="h3">Productos Cargados</h2>
      <p>
        Podés llevar un registro de todas las operaciones registradas en el
        sistema
      </p>
      <b-list-group>
        <b-list-group-item>
          <pre>producto</pre>
          <b-button variant="text">Ver Detalles</b-button>
        </b-list-group-item>
      </b-list-group>
      <b-alert variant="info" show>
        No hay ninguna producto registrado.
      </b-alert>
      <p>
        <b-button>Cargar Producto</b-button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SellerDashboard"
};
</script>
