<template>
  <div id="buyer-dashboard">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-tab title="Perfil" active>
          <div class="my-4">
            <p>Nombre</p>
          </div>
        </b-tab>
        <b-tab title="Ubicaciones">
          <BuyerLocationList />
        </b-tab>
        <b-tab title="Compras Anteriores">
          <BuyerOperationList />
        </b-tab>
        <b-tab title="Alertas">
          <p class="text-muted">WIP</p>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import BuyerLocationList from "../components/BuyerLocationList";
import BuyerOperationList from "../components/BuyerOperationList";

export default {
  name: "BuyerDashboard",
  components: { BuyerOperationList, BuyerLocationList }
};
</script>
