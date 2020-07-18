<template>
  <PageContainer
    :title="$t('dashboard.dashboard')"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="row">
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <b-card>
          <b-button
            to="/search"
            size="lg"
            variant="outline-primary"
            block
            class="stretched-link"
          >
            {{ $t("dashboard.search") }}
          </b-button>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            consequatur deleniti ducimus eaque excepturi.
          </p>
        </b-card>
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <b-card>
          <b-button
            to="/locations"
            size="lg"
            variant="outline-primary"
            block
            class="stretched-link"
          >
            {{ $t("dashboard.locations") }}
          </b-button>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            consequatur deleniti ducimus eaque excepturi.
          </p>
        </b-card>
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <b-card>
          <b-button
            to="/shops"
            size="lg"
            variant="outline-primary"
            block
            class="stretched-link"
          >
            {{ $t("dashboard.shops") }}
          </b-button>
          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            consequatur deleniti ducimus eaque excepturi.
          </p>
        </b-card>
      </div>
    </div>
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
