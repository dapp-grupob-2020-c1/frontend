<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active>
        {{ $t("shop.viewDetails") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <ErrorAlert :request-info="requestInfo" />

    <template v-if="shopDetails">
      <GmapMap
        :center="{
          lat: shopDetails.location.latitude,
          lng: shopDetails.location.longitude
        }"
        :zoom="15"
        :options="{
          disableDefaultUI: true,
          fullscreenControl: false
        }"
        style="width: 100%; height: 300px"
      >
        <GmapMarker
          :position="{
            lat: shopDetails.location.latitude,
            lng: shopDetails.location.longitude
          }"
        />
      </GmapMap>

      <ShopDetails :shop="shopDetails" expanded />
    </template>
  </b-container>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
import { getShopRequest } from "../../api/shopRequests";
import ShopDetails from "../../components/ShopDetails";

export default {
  name: "DisplayShop",
  components: { ShopDetails, ErrorAlert },
  async mounted() {
    const response = await getShopRequest(this.$route.params.id);
    this.shopDetails = response.data;
  },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      shopDetails: null
    };
  },
  methods: {}
};
</script>
