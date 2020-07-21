<template>
  <PageContainer
    :title="$t('order.orderList')"
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/orders/create">
        <b-icon-plus-square />
        {{ $t("order.createNew") }}
      </b-button>
    </div>

    <b-list-group v-if="ordersList.length">
      <b-list-group-item v-for="order in ordersList" :key="order.id">
        {{ order }}
        <div class="actions mt-3 pt-3 border-top border-light">
          <b-button
            variant="outline-primary"
            class="mr-2"
            :to="`/orders/${order.id}`"
          >
            <b-icon-info-square />
            {{ $t("order.viewDetails") }}
          </b-button>
          <b-button
            variant="outline-primary"
            class="mr-2"
            :to="`/orders/${order.id}/edit`"
          >
            <b-icon-pencil-square />
            {{ $t("order.editDetails") }}
          </b-button>
          <b-button
            class="mr-2"
            variant="outline-danger"
            @click="handleOrderDelete(order)"
          >
            <b-icon-x-square />
            {{ $t("order.delete") }}
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("order.listEmpty") }}
    </b-alert>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";
export default {
  components: {
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
    this.$store.dispatch("user/getOrders");
  },
  methods: {
    async handleOrderDelete(order) {
      await this.$store.dispatch("user/deleteOrder", order.id);
      await this.$store.dispatch("user/getOrders");
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
