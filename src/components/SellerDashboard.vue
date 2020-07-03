<template>
  <div id="seller-dashboard">
    <!-- Datos -->
    <div class="mb-5">
      <h2 class="h3">Datos del Negocio</h2>
      <p class="text-muted">WIP</p>
      <p>Nombre</p>
      <p>Ubicación</p>
      <p>Horarios de Atención</p>
      <p>Distancia de Envío</p>
    </div>

    <!-- Productos -->
    <SellerProductList class="mb-5" />

    <!-- Operaciones -->
    <SellerOperationList class="mb-5" />

    <!-- Descuento -->
    <div class="mb-5">
      <h2 class="h3">Descuentos</h2>
      <p class="text-muted">WIP</p>
    </div>
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
