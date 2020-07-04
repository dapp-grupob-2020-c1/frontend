<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("dashboard") }}</h1>

    <!-- Buyer -->
    <BuyerDashboard v-if="userType === 'buyer'" />

    <!-- Seller -->
    <SellerDashboard v-if="userType === 'seller'" />
  </b-container>
</template>

<script>
import BuyerDashboard from "../components/BuyerDashboard";
import SellerDashboard from "../components/SellerDashboard";

export default {
  name: "Dashboard",
  components: { BuyerDashboard, SellerDashboard },
  computed: {
    userType() {
      return this.$store.state.auth.type;
    }
  }
};
</script>
