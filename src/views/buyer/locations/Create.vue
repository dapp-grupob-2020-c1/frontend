<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("location.create.createNewLocation") }}</h1>

    <b-form-group
      id="input-group-address"
      :label="$t('location.create.address')"
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

    <p>WIP: punto en el mapa</p>

    <b-button variant="primary" size="lg" @click="handleCreateLocation">
      {{ $t("location.create.submit") }}
    </b-button>
    <b-button variant="text" size="lg" @click="handleCancel">
      {{ $t("location.create.cancel") }}
    </b-button>
  </b-container>
</template>

<script>
export default {
  name: "LocationsCreate",
  data() {
    return {
      address: "",
      lat: null,
      lng: null
    };
  },
  methods: {
    handleCreateLocation() {
      console.log("//TODO handle create location");

      //TODO: validate location information
      const newLocation = {
        address: this.address,
        lat: this.lat,
        lng: this.lng
      };
      this.$store.commit("buyer/addLocation", newLocation);
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
