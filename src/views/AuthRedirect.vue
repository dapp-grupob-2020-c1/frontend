<template>
  <PageContainer>
    <p class="text-center">Auth...</p>
  </PageContainer>
</template>

<script>
import { defaultToasterOptions } from "../config/options";
import PageContainer from "../components/PageContainer";

export default {
  components: { PageContainer },
  mounted() {
    console.log("auth mounted");
    if (this.$route.query.token) {
      this.$store.commit("auth/setLogin", this.$route.query.token);
      this.$root.$bvToast.toast(
        this.$t("login.loginSuccess"),
        defaultToasterOptions
      );
    } else {
      const errorToasterOptions = {
        variant: "danger",
        toaster: "b-toaster-top-center",
        noCloseButton: true,
        autoHideDelay: 5000,
      };
      this.$root.$bvToast.toast(
        this.$t("login.loginError"),
        errorToasterOptions
      );
      this.$router.push("/login");
    }
  },
};
</script>
