<template>
  <b-card class="dashboard-box">
    <b-button
      :to="to"
      size="lg"
      variant="outline-primary"
      block
      class="stretched-link"
    >
      {{ title }}
    </b-button>
    <p class="mt-3">
      {{ subtitle }}
    </p>
  </b-card>
</template>

<script>
export default {
  name: "DashboardBox",
  props: {
    title: String,
    subtitle: String,
    to: String,
  },
};
</script>

<style lang="scss">
.dashboard-box {
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 15px rgba(33, 33, 33, 0.3);
  }
}
</style>
