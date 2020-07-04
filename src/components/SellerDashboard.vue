<template>
  <div id="seller-dashboard">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-tab :title="$t('dashboard.seller.profile')" active>
          <p>{{ $t("dashboard.sellerProfile.storeName") }}</p>
          <p>{{ $t("dashboard.sellerProfile.location") }}</p>
          <p>{{ $t("dashboard.sellerProfile.openingHours") }}</p>
          <p>{{ $t("dashboard.sellerProfile.shippingDistance") }}</p>
        </b-tab>
        <b-tab :title="$t('dashboard.seller.products')">
          <SellerProductList />
        </b-tab>
        <b-tab :title="$t('dashboard.seller.operations')">
          <SellerOperationList />
        </b-tab>
        <b-tab :title="$t('dashboard.seller.discounts')">
          <p class="text-muted">WIP</p>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import SellerOperationList from "./SellerOperationList";
import SellerProductList from "./SellerProductList";
export default {
  name: "SellerDashboard",
  components: { SellerProductList, SellerOperationList }
};
</script>
