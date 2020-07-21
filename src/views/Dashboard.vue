<template>
  <PageContainer
    :title="$t('dashboard.dashboard')"
    :breadcrumb-items="breadcrumbItems"
  >
    <h1 class="h3 pt-3 border-top border-light">
      {{ $t("dashboard.buySection") }}
    </h1>
    <div class="row">
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/orders/search"
          :title="$t('dashboard.searchProducts')"
          :subtitle="$t('dashboard.searchProductsDescription')"
        />
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/orders/create"
          :title="$t('dashboard.createOrder')"
          :subtitle="$t('dashboard.createOrderDescription')"
        />
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/orders"
          :title="$t('dashboard.viewOrders')"
          :subtitle="$t('dashboard.viewOrdersDescription')"
        />
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/locations"
          :title="$t('dashboard.locations')"
          subtitle="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>

    <h1 class="h3 pt-3 border-top border-light">
      {{ $t("dashboard.sellSection") }}
    </h1>
    <div class="row">
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/shops"
          :title="$t('dashboard.shops')"
          subtitle="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer";
import DashboardBox from "../components/DashboardBox";
export default {
  components: { DashboardBox, PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
      ],
    };
  },
  async mounted() {
    this.$store.dispatch("user/getUserInformation");
    this.$store.dispatch("cart/getActiveShoppingCart");
    this.$store.dispatch("cart/getOldCarts");
  },
};
</script>
