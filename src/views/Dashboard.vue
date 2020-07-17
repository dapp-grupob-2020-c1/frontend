<template>
  <PageContainer
    :title="$t('dashboard.dashboard')"
    :breadcrumb-items="breadcrumbItems"
  >
    <b-nav>
      <b-nav-item to="/search">{{ $t("dashboard.search") }}</b-nav-item>
      <b-nav-item to="/locations">{{ $t("dashboard.locations") }}</b-nav-item>
      <b-nav-item to="/shops">{{ $t("dashboard.shops") }}</b-nav-item>
    </b-nav>
  </PageContainer>
</template>

<script>
import { getCurrentUserRequest } from "../api/userRequests";
import PageContainer from "../components/PageContainer";
export default {
  name: "Dashboard",
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        }
      ]
    };
  },
  async mounted() {
    const currentUser = await getCurrentUserRequest();
    const currentUserInfo = {
      locations: currentUser.data.locations,
      shops: currentUser.data.shops,
      name: currentUser.data.name,
      email: currentUser.data.email,
      imgUrl: currentUser.data.imgUrl,
      provider: currentUser.data.provider
    };
    this.$store.commit("user/setUserInfo", currentUserInfo);
  }
};
</script>
