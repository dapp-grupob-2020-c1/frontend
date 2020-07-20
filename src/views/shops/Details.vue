<template>
  <PageContainer
    :title="$t('shop.viewDetails')"
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="actions my-2">
      <b-button
        variant="outline-primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${shopInfo.id}/products`"
      >
        <b-icon-info-square />
        {{ $t("shop.viewProducts") }}
      </b-button>
      <b-button
        variant="outline-primary"
        size="lg"
        class="mr-2"
        :to="`/shops/${shopInfo.id}/edit`"
      >
        <b-icon-pencil-square />
        {{ $t("shop.editDetails") }}
      </b-button>
    </div>

    <template v-if="shopInfo">
      <GmapMap
        v-if="shopInfo.location"
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
    </template>
  </PageContainer>
</template>

<script>
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";

export default {
  name: "DisplayShop",
  components: { PageContainer, ShopDetails },
  computed: {
    shopInfo() {
      return this.$store.getters["user/findShop"](this.$route.params.shopId);
    }
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
      ]
    };
  }
};
</script>
