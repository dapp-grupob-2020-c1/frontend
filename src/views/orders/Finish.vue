<template>
  <PageContainer
    :title="$t('order.finishOrder')"
    :breadcrumb-items="breadcrumbItems"
  >
    <h2 class="h4">{{ $t("order.productsList") }}</h2>
    <div class="container">
      <OrderEntriesList />
    </div>

    <h2 class="h4">{{ $t("order.typesAndThresholds") }}</h2>
    <div class="container">
      <OrderThresholdsList />
    </div>

    <h2 class="h4">{{ $t("order.shippingOptions") }}</h2>
    <div class="shipping-options">
      <p>{{ $t("order.shippingOptionsDescription") }}</p>
      <div class="row">
        <div
          class="col-12 col-lg-6 col-xl-4 mb-3"
          v-for="shop in $store.state.cart.activeShops"
          :key="shop.id"
        >
          <b-card>
            <OrderShopShipping :shop="shop" />
          </b-card>
        </div>
      </div>
    </div>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" @click="handleCreateOrder">
        <b-icon-check2-square />
        {{ $t("order.finishOrder") }}
      </b-button>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";
import OrderShopShipping from "../../components/OrderShopShipping";
import OrderEntriesList from "../../components/OrderEntriesList";
import OrderThresholdsList from "../../components/OrderThresholdsList";
import { formatLocalDateTime } from "@/functions/dateHelpers";

export default {
  components: {
    OrderThresholdsList,
    OrderEntriesList,
    PageContainer,
    OrderShopShipping,
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("order.finishOrder"),
        },
      ],
      orderLocationId: null,
    };
  },
  mounted() {
    // select first location by default
    if (this.$store.state.user.locations) {
      this.orderLocationId = this.$store.state.user.locations[0].id;
    }
  },
  computed: {
    activeOrder() {
      return this.$store.state.cart.active;
    },
  },
  methods: {
    handleCancel() {
      this.$router.push("/dashboard");
    },
    async handleCreateOrder() {
      const deliveries = [];
      const takeaways = [];

      // recorro cada shop, y armo las opciones para la compra
      const shopIds = this.$store.getters["cart/getActiveCartShopsList"];
      shopIds.forEach((shopId) => {
        const shopSettings = this.$store.state.cart.activeShopOptions[shopId];
        const shoppingEntryIds = this.$store.getters[
          "cart/getEntriesIdsForShop"
        ](shopId);
        const formattedDate = formatLocalDateTime(shopSettings.turn);

        // add order information to corresponding list
        if (shopSettings.delivery == "takeaway") {
          takeaways.push({
            shopId,
            shoppingEntryIds,
            turn: formattedDate,
          });
        } else {
          deliveries.push({
            shopId,
            shoppingEntryIds,
            dateOfDelivery: formattedDate,
            locationId: this.$store.state.cart.active.location.id,
          });
        }
      });

      await this.$store.dispatch("cart/checkoutCart", {
        deliveries,
        takeaways,
      });
    },
  },
};
</script>
