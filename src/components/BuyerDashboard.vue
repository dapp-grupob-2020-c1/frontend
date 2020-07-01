<template>
  <div id="buyer-dashboard">
    <!-- Locations -->
    <BuyerLocationList class="my-4" />

    <!-- Compras Anteriores -->
    <BuyerOperationList class="my-4" />
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
