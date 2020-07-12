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

    <p>{{ $route.params.id }}</p>
  </b-container>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";

export default {
  name: "DisplayShop",
  components: { ErrorAlert },
  mounted() {
    console.log("la url de detalles", this.$route.path);
  },
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
  methods: {}
};
</script>
