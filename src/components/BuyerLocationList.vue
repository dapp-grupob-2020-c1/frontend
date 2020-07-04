<template>
  <div>
    <p>{{ $t("dashboard.buyerLocations.description") }}</p>
    <b-list-group v-if="locationsList.length">
      <b-list-group-item
        v-for="(location, index) in locationsList"
        :key="index"
      >
        <p>{{ index + 1 }}</p>
        <pre>{{ location }}</pre>
      </b-list-group-item>
    </b-list-group>
    <b-alert variant="info" show v-else>
      {{ $t("dashboard.buyerLocations.empty") }}
    </b-alert>
    <div class="actions my-2">
      <b-button variant="outline-primary">
        {{ $t("dashboard.buyerLocations.addLocation") }}
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuyerLocationList",
  computed: {
    locationsList() {
      return this.$store.state.buyer.locations;
    }
  }
};
</script>
