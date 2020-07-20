<template>
  <PageContainer
    :title="$t('location.locationsList')"
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/locations/create">
        <b-icon-plus-square />
        {{ $t("location.createNewLocation") }}
      </b-button>
    </div>

    <b-list-group v-if="locationsList.length">
      <b-list-group-item v-for="location in locationsList" :key="location.id">
        <div class="row">
          <div class="col-6 col-md-4">
            <GmapMap
              :center="{ lat: location.latitude, lng: location.longitude }"
              :zoom="14"
              :options="{
                disableDefaultUI: true,
                fullscreenControl: false
              }"
              style="width: 100%; height: 200px"
            >
              <GmapMarker
                :position="{ lat: location.latitude, lng: location.longitude }"
              />
            </GmapMap>
          </div>
          <div class="col">
            <p>{{ location.address }}</p>
            <b-button
              variant="outline-danger"
              @click="handleLocationDelete(location)"
            >
              <b-icon-x-square />
              {{ $t("location.deleteLocation") }}
            </b-button>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("location.listEmpty") }}
    </b-alert>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";
export default {
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("location.locationsList"),
          to: "/locations"
        }
      ]
    };
  },
  computed: {
    locationsList() {
      return this.$store.state.user.locations;
    }
  },
  mounted() {
    this.$store.dispatch("user/getLocations");
  },
  methods: {
    async handleLocationDelete(location) {
      this.$store.dispatch("user/deleteLocation", location.id);
      this.$store.dispatch("user/getLocations");
    }
  }
};
</script>
