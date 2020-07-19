<template>
  <PageContainer
    :title="$t('shop.viewDetails')"
    :breadcrumb-items="breadcrumbItems"
  >
    <template v-if="shopInfo">
      <GmapMap
        :center="{
          lat: shopInfo.location.latitude,
          lng: shopInfo.location.longitude
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
            lat: shopInfo.location.latitude,
            lng: shopInfo.location.longitude
          }"
        />
      </GmapMap>

      <ShopDetails :shop="shopInfo" expanded />

      <div class="actions my-2">
        <b-button
          variant="outline-primary"
          size="lg"
          :to="`/shops/${shopInfo.id}/products`"
        >
          {{ $t("shop.viewProducts") }}
        </b-button>
      </div>
    </template>
  </PageContainer>
</template>

<script>
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";

export default {
  name: "DisplayShop",
  components: { PageContainer, ShopDetails },
  mounted() {
    // find shop info in user shops, and copy to local data
    const foundShop = this.$store.state.user.shops.find(shop => {
      return shop.id == this.$route.params.shopId;
    });
    this.shopInfo = { ...foundShop };
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shop.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shop.viewDetails"),
          to: `/shops/${this.$route.params.shopId}`
        }
      ],
      shopInfo: null
    };
  }
};
</script>
