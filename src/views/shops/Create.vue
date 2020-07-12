<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.createNew") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/shops/create">
        {{ $t("shop.createNew") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.createNew") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <form @submit.prevent="handleCreateShop">
      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="requestInfo.loading"
      >
        {{ $t("shop.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("shop.cancel") }}
      </b-button>
    </form>
  </b-container>
</template>

<script>
// import { addLocationRequest } from "../../api/userRequests";
// import { defaultToasterOptions } from "../../config/options";
import ErrorAlert from "../../components/ErrorAlert";

export default {
  name: "ShopsCreate",
  components: { ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      }
    };
  },
  methods: {
    async handleCreateShop() {
      // //TODO: validate location information
      // const newLocationInformation = {
      //   address: this.address,
      //   latitude: this.selectedPosition.lat,
      //   longitude: this.selectedPosition.lng
      // };
      //
      // // reset loading state
      // this.requestInfo = {
      //   loading: true,
      //   error: false,
      //   errorMessageKey: "",
      //   errorAdditionalInfo: ""
      // };
      //
      // try {
      //   const response = await addLocationRequest(newLocationInformation);
      //   this.$store.dispatch("user/addLocation", response.data);
      //   this.$root.$bvToast.toast(
      //     this.$t("location.createSuccess"),
      //     defaultToasterOptions
      //   );
      //   this.$router.back();
      // } catch (e) {
      //   console.error(e);
      //   this.requestInfo.error = true;
      //   this.requestInfo.errorMessageKey = "app.requestError";
      // } finally {
      //   this.requestInfo.loading = false;
      // }
    },
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>
