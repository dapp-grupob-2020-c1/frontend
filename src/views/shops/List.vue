<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/locations">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.shopList") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <b-list-group v-if="shopsList.length">
      <b-list-group-item v-for="shop in shopsList" :key="shop.id">
        {{ shop }}
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("shop.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/shops/create">
        {{ $t("shop.createNew") }}
      </b-button>
    </div>
  </b-container>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
export default {
  name: "ShopsList",
  components: { ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      }
    };
  },
  computed: {
    shopsList() {
      return this.$store.state.user.shops;
    }
  }
};
</script>
