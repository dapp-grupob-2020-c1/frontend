<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item active to="/dashboard">{{
        $t("dashboard.dashboard")
      }}</b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">{{ $t("dashboard.dashboard") }}</h1>

    <b-nav>
      <b-nav-item to="/search">{{ $t("dashboard.search") }}</b-nav-item>
      <b-nav-item to="/locations">{{ $t("dashboard.locations") }}</b-nav-item>
      <b-nav-item to="/shops">{{ $t("dashboard.shops") }}</b-nav-item>
    </b-nav>
  </b-container>
</template>

<script>
import { getCurrentUserRequest } from "../api/userRequests";
export default {
  name: "Dashboard",
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
