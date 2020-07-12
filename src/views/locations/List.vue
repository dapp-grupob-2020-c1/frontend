<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/locations">
        {{ $t("location.locationsList") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("location.locationsList") }}
    </h1>

    <b-list-group v-if="locationsList.length">
      <b-list-group-item v-for="location in locationsList" :key="location.id">
        <pre>{{ location }}</pre>
        <b-button variant="text">
          {{ $t("location.showDetails") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("location.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/locations/create">
        {{ $t("location.createNewLocation") }}
      </b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "LocationsList",
  data() {
    return {
      loading: false,
      error: false
    };
  },
  computed: {
    locationsList() {
      return [];
    }
  }
};
</script>
