<template>
  <PageContainer
    :title="$t('location.createNewLocation')"
    :breadcrumb-items="breadcrumbItems"
  >
    <form @submit.prevent="handleCreateLocation">
      <!-- Dirección -->
      <b-form-group
        id="input-group-address"
        :label="$t('location.address')"
        label-for="address"
      >
        <b-form-input
          id="address"
          type="text"
          name="address"
          required
          v-model="address"
        ></b-form-input>
      </b-form-group>
      <!-- Coordenadas -->
      <b-form-group
        id="input-group-coordinates"
        :label="$t('location.coordinates')"
        :description="$t('location.coordinatesDescription')"
      >
        <GmapMap
          ref="map"
          @click="handleMapClick"
          :center="{
            lat: -34.7506661,
            lng: -58.2497686,
          }"
          :zoom="13"
          style="width: 100%; height: 300px;"
        >
          <GmapMarker
            :position="selectedPosition"
            v-if="selectedPosition.lat && selectedPosition.lng"
          />
        </GmapMap>
      </b-form-group>

      <b-button variant="primary" size="lg" type="submit">
        {{ $t("location.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("location.cancel") }}
      </b-button>
    </form>
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
          to: "/dashboard",
        },
        {
          text: this.$t("location.locationsList"),
          to: "/locations",
        },
        {
          text: this.$t("location.createNewLocation"),
          to: "/locations/create",
        },
      ],
      address: "",
      selectedPosition: {
        lat: null,
        lng: null,
      },
    };
  },
  methods: {
    handleMapClick(e) {
      // update selected position
      this.selectedPosition = e.latLng.toJSON();
    },
    handleCancel() {
      this.$router.push("/locations");
    },
    async handleCreateLocation() {
      //TODO: validate location information
      const newLocationInformation = {
        address: this.address,
        latitude: this.selectedPosition.lat,
        longitude: this.selectedPosition.lng,
      };

      await this.$store.dispatch("user/createLocation", newLocationInformation);
      await this.$store.dispatch("user/getLocations");
      this.$router.push("/locations");
    },
  },
};
</script>
