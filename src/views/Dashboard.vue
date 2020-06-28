<template>
  <b-container class="my-5">
    <h1>Dashboard</h1>
    <!-- Locations -->
    <CustomerLocationsCard />
  </b-container>
</template>

<script>
import CustomerLocationsCard from "../components/CustomerLocationsCard";
export default {
  name: "Dashboard",
  components: {
    CustomerLocationsCard
  },
  computed: {
    userType() {
      return this.$store.state.user.type;
    }
  }
};
</script>
