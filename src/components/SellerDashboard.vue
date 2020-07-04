<template>
  <div id="seller-dashboard">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-tab title="Perfil del Negocio" active>
          <p class="text-muted">WIP</p>
          <p>Nombre</p>
          <p>Ubicación</p>
          <p>Horarios de Atención</p>
          <p>Distancia de Envío</p>
        </b-tab>
        <b-tab title="Productos">
          <SellerProductList />
        </b-tab>
        <b-tab title="Operaciones">
          <SellerOperationList />
        </b-tab>
        <b-tab title="Descuentos">
          <p class="text-muted">WIP</p>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import SellerOperationList from "./SellerOperationList";
import SellerProductList from "./SellerProductList";
export default {
  name: "SellerDashboard",
  components: { SellerProductList, SellerOperationList }
};
</script>
