<template>
  <PageContainer
    :title="$t('shop.viewDetails')"
    :breadcrumb-items="breadcrumbItems"
    :request-info="requestInfo"
  >
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

      <b-button
        variant="outline-primary"
        :to="`/shops/${shopDetails.id}/products`"
      >
        {{ $t("shop.viewProducts") }}
      </b-button>
    </template>
  </PageContainer>
</template>

<script>
import { getShopRequest } from "../../api/shopRequests";
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";

export default {
  name: "DisplayShop",
  components: { PageContainer, ShopDetails },
  async mounted() {
    const response = await getShopRequest(this.$route.params.id);
    this.shopDetails = response.data;
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shops.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shops.viewDetails")
        }
      ],
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
