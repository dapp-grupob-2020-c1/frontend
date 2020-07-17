<template>
  <PageContainer>
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

    <ErrorAlert :request-info="requestInfo" />

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
          :center="{ lat: -34.90385708261236, lng: -58.20926714017421 }"
          :zoom="9"
          style="width: 100%; height: 300px"
        >
          <GmapMarker
            :position="selectedPosition"
            v-if="selectedPosition.lat && selectedPosition.lng"
          />
        </GmapMap>
      </b-form-group>

      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="requestInfo.loading"
      >
        {{ $t("location.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("location.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import { addLocationRequest } from "../../api/userRequests";
import { defaultToasterOptions } from "../../config/options";
import ErrorAlert from "../../components/ErrorAlert";
import PageContainer from "../../components/PageContainer";

export default {
  name: "LocationsCreate",
  components: { PageContainer, ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
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
      const newLocationInformation = {
        address: this.address,
        latitude: this.selectedPosition.lat,
        longitude: this.selectedPosition.lng
      };

      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };

      try {
        const response = await addLocationRequest(newLocationInformation);
        this.$store.dispatch("user/addLocation", response.data);
        this.$root.$bvToast.toast(
          this.$t("location.createSuccess"),
          defaultToasterOptions
        );
        this.$router.back();
      } catch (e) {
        console.error(e);
        this.requestInfo.error = true;
        this.requestInfo.errorMessageKey = "app.requestError";
      } finally {
        this.requestInfo.loading = false;
      }
    },
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>
