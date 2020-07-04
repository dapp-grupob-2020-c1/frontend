<template>
  <div>
    <p>
      {{ $t("dashboard.sellerOperations.description") }}
    </p>
    <b-list-group v-if="operationsList.length">
      <b-list-group-item
        v-for="(operation, index) in operationsList"
        :key="index"
      >
        <p>#{{ index }}</p>
        <pre>{{ operation }}</pre>
        <b-button variant="text">
          {{ $t("dashboard.sellerOperations.showDetails") }}
        </b-button>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else>
      {{ $t("dashboard.sellerOperations.empty") }}
    </b-alert>
  </div>
</template>
<script>
export default {
  name: "SellerOperationList",
  computed: {
    operationsList() {
      return this.$store.state.seller.operations;
    }
  }
};
</script>
