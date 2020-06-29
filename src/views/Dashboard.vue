<template>
  <b-container class="my-5">
    <h1 class="h1">Dashboard</h1>

    <!-- Buyer: Locations -->
    <BuyerLocationList class="my-4" v-if="userType === 'buyer'" />

    <!-- Buyer: Compras Anteriores -->
    <BuyerOperationList class="my-4" v-if="userType === 'buyer'" />

    <!-- Seller: Listado de Productos -->
    <div class="my-4" v-if="userType === 'seller'">
      <h2 class="h3">Productos</h2>
    </div>
  </b-container>
</template>

<script>
import BuyerLocationList from "../components/BuyerLocationList";
import BuyerOperationList from "../components/BuyerOperationList";

export default {
  name: "Dashboard",
  components: { BuyerOperationList, BuyerLocationList },
  computed: {
    userType() {
      return this.$store.state.user.type;
    }
  }
};
</script>
