<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/locations">
        {{ $t("location.locationsList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/locations/create">
        {{ $t("location.createNewLocation") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("location.createNewLocation") }}
    </h1>

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

    <b-form-group
      id="input-group-coordinates"
      :label="$t('location.coordinates')"
      :description="$t('location.coordinatesDescription')"
    >
      <GmapMap
        ref="map"
        @click="handleMapClick"
        :center="{ lat: -34.90385708261236, lng: -58.20926714017421 }"
        :zoom="9"
        style="width: 100%; height: 300px"
      >
        <GmapMarker :position="selectedPosition" />
      </GmapMap>
    </b-form-group>

    <b-button variant="primary" size="lg" @click="handleCreateLocation">
      {{ $t("location.submitCreate") }}
    </b-button>
    <b-button variant="text" size="lg" @click="handleCancel">
      {{ $t("location.cancel") }}
    </b-button>
  </b-container>
</template>

<script>
import { addLocationRequest } from "../../api/userRequests";
import { defaultToasterOptions } from "../../config/options";

export default {
  name: "LocationsCreate",
  data() {
    return {
      address: "",
      selectedPosition: {
        lat: null,
        lng: null
      }
    };
  },
  methods: {
    handleMapClick(e) {
      // update selected position
      this.selectedPosition = e.latLng.toJSON();
    },
    async handleCreateLocation() {
      //TODO: validate location information
      const newLocation = {
        address: this.address,
        latitude: this.selectedPosition.lat,
        longitude: this.selectedPosition.lng
      };

      await addLocationRequest(newLocation);
      const updatedLocations = [
        newLocation,
        ...this.$store.state.user.locations
      ];
      this.$store.commit("user/setLocations", updatedLocations);

      this.$root.$bvToast.toast(this.$t("location.create.successfulCreation"), {
        variant: "success",
        toaster: "b-toaster-top-right",
        noCloseButton: true,
        autoHideDelay: 4000
      });
      this.$router.back();
    },
    handleCancel() {
      console.log("//TODO handle cancel");
      this.$router.back();
    }
  }
};
</script>
