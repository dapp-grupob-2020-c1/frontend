<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/locations">
        {{ $t("location.list.locationsList") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("location.list.locationsList") }}
    </h1>

    <b-card>
      <pre>{{ [] }}</pre>
    </b-card>

    <div class="actions my-2">
      <b-button to="/locations/create">
        {{ $t("location.create.createNewLocation") }}
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
  }
};
</script>
