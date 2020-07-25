<template>
  <PageContainer
    :title="$t('order.finishOrder')"
    :breadcrumb-items="breadcrumbItems"
  >
    <h2 class="h4">{{ $t("order.productsList") }}</h2>
    <div class="order-entries-list container">
      <div
        class="order-entry row align-items-center mb-2 border-bottom"
        v-for="(entry, index) in activeOrder.entries"
        :key="index"
      >
        <div class="col-auto">
          <b-button
            size="sm"
            variant="outline-danger"
            @click="handleDeleteEntry(entry)"
          >
            <b-icon-x />
          </b-button>
        </div>
        <div class="col">
          <p class="mb-1">
            {{ entry.product.name }}
            <span class="text-muted">&dash; {{ entry.product.brand }}</span>
          </p>
          <p class="mb-1">{{ entry.quantity }} x $ {{ entry.product.price }}</p>
        </div>
        <div class="col-4 col-md-3 text-right">
          <p class="lead m-0">$ {{ entry.quantity * entry.product.price }}</p>
        </div>
      </div>

      <div
        class="row font-weight-bold border-top border-dark align-items-baseline py-2"
      >
        <div class="col">
          <p class="lead">Total:</p>
        </div>
        <div class="col-3 text-right">
          <p class="lead font-weight-bold">$ {{ activeOrder.total }}</p>
        </div>
      </div>
      <p></p>
    </div>

    <h2 class="h4">{{ $t("order.typesAndThresholds") }}</h2>
    <div class="thresholds-list">
      <template v-for="threshold in activeOrder.thresholdsByType">
        <div
          v-if="threshold.totalForType > 0"
          :key="threshold.type"
          class="d-flex"
        >
          <p>
            {{ $t(`productTypes.${threshold.type}`) }}:
            <span
              :class="{
                'bg-danger': threshold.totalForType <= threshold.threshold,
              }"
            >
              $ {{ threshold.totalForType }}
              <span class="text-muted">/ {{ threshold.threshold }}</span>
            </span>
          </p>
        </div>
      </template>
    </div>

    <h2 class="h4">{{ $t("order.shippingOptions") }}</h2>
    <div class="shipping-options">
      <p>{{ $t("order.shippingOptionsDescription") }}</p>
      <b-list-group>
        <b-list-group-item
          v-for="store in $store.state.cart.activeStores"
          :key="store.id"
        >
          <b-card-title>{{ store.name }}</b-card-title>
          <h4 class="h5">{{ $t("order.paymentMethod") }}</h4>
          <p>{{ store.paymentMethods }}</p>
          <h4 class="h5">{{ $t("order.shippingOption") }}</h4>
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </b-list-group-item>
      </b-list-group>
    </div>
    <div class="actions my-2">
      <b-button variant="primary" size="lg">
        <b-icon-check2-square />
        {{ $t("order.finalizeOrder") }}
      </b-button>
    </div>
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
    async handleDeleteEntry(entry) {
      await this.$store.dispatch(
        "cart/deleteProductFromCart",
        entry.product.id
      );
    },
    handleCancel() {
      this.$router.push("/dashboard");
    },
    async handleCreateOrder() {
      await this.$store.dispatch("cart/createCart", this.orderLocationId);
      // await this.$store.dispatch("user/getUserInformation");
      this.$router.push("/orders/search");
    },
  },
};
</script>
