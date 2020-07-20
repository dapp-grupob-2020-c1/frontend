<template>
  <PageContainer
    :title="$t('dashboard.dashboard')"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="row">
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/search"
          :title="$t('dashboard.search')"
          subtitle="Lorem ipsum dolor sit amet."
        />
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/locations"
          :title="$t('dashboard.locations')"
          subtitle="Lorem ipsum dolor sit amet."
        />
      </div>
      <div class="mb-3 col-12 col-sm-6 col-lg-4 col-xl-3">
        <DashboardBox
          to="/shops"
          :title="$t('dashboard.shops')"
          subtitle="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from "../components/PageContainer";
import DashboardBox from "../components/DashboardBox";
export default {
  name: "Dashboard",
  components: { DashboardBox, PageContainer },
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
    this.$store.dispatch("user/getUserInformation");
  }
};
</script>
