<template>
  <div id="buyer-dashboard">
    <b-card no-body>
      <b-tabs pills card fill>
        <b-tab :title="$t('dashboard.buyer.profile')" active>
          <div class="my-4">
            <p>{{ $t("dashboard.buyer.name") }}</p>
          </div>
        </b-tab>
        <b-tab :title="$t('dashboard.buyer.locations')">
          <BuyerLocationList />
        </b-tab>
        <b-tab :title="$t('dashboard.buyer.operations')">
          <BuyerOperationList />
        </b-tab>
        <b-tab :title="$t('dashboard.buyer.alerts')">
          <p class="text-muted">WIP</p>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import BuyerLocationList from "../components/BuyerLocationList";
import BuyerOperationList from "../components/BuyerOperationList";

export default {
  name: "BuyerDashboard",
  components: { BuyerOperationList, BuyerLocationList }
};
</script>
