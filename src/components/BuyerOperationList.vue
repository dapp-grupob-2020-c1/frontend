<template>
  <div>
    <p>{{ $t("dashboard.buyerOperations.description") }}</p>
    <b-list-group v-if="operationsList.length">
      <b-list-group-item
        v-for="(operation, index) in operationsList"
        :key="index"
      >
        <p>#{{ index }}</p>
        <pre>{{ operation }}</pre>
        <b-button variant="text">
          {{ $t("dashboard.buyerOperations.showDetails") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else>
      {{ $t("dashboard.buyerOperations.empty") }}
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "BuyerOperationList",
  computed: {
    operationsList() {
      return this.$store.state.buyer.operations;
    }
  }
};
</script>
