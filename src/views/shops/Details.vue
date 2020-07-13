<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active>
        {{ $t("shop.viewDetails") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <ErrorAlert :request-info="requestInfo" />

    <div>
      <pre>{{ shopDetails }}</pre>
    </div>
  </b-container>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
import { getShopRequest } from "../../api/shopRequests";

export default {
  name: "DisplayShop",
  components: { ErrorAlert },
  async mounted() {
    const response = await getShopRequest(this.$route.params.id);
    this.shopDetails = response.data;
  },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      shopDetails: null
    };
  },
  methods: {}
};
</script>
