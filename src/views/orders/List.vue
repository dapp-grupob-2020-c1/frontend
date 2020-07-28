<template>
  <PageContainer
    :title="$t('order.orderList')"
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="actions my-2">
      <b-button
        to="/orders/search"
        variant="primary"
        size="lg"
        class="mr-2 mb-2"
        v-if="activeOrder"
      >
        <b-icon-search />
        {{ $t("order.searchProducts") }}
      </b-button>
      <b-button
        to="/orders/create"
        variant="outline-primary"
        size="lg"
        class="mr-2 mb-2"
      >
        <b-icon-plus-square />
        {{ $t("order.createNew") }}
      </b-button>
    </div>

    <!-- Past Orders -->
    <h2 class="h4">{{ $t("order.pastOrders") }}</h2>
    <b-list-group v-if="ordersList.length">
      <b-list-group-item v-for="order in ordersList" :key="order.id">
        <OrderListItem :order="order" />
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("order.listEmpty") }}
    </b-alert>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";
import OrderListItem from "@/components/OrderListItem";
export default {
  components: {
    OrderListItem,
    PageContainer,
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("order.orderList"),
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("cart/getActiveShoppingCart");
    this.$store.dispatch("cart/getOldCarts");
  },
  methods: {
    async handleOrderDelete(order) {
      // await this.$store.dispatch("car/deleteOrder", order.id);
      // await this.$store.dispatch("user/getOrders");
    },
  },
  computed: {
    activeOrder() {
      return this.$store.state.cart.active;
    },
    ordersList() {
      return this.$store.state.cart.history;
    },
  },
};
</script>
