<template>
  <PageContainer
    :title="$t('order.createNew')"
    :breadcrumb-items="breadcrumbItems"
  >
    <b-alert variant="warning" show v-if="!$store.state.user.locations.length">
      <p>{{ $t("order.mustCreateLocationError") }}</p>
      <b-button variant="primary" size="lg" to="/locations/create">
        {{ $t("location.createNewLocation") }}
      </b-button>
    </b-alert>
    <form @submit.prevent="handleCreateOrder" v-else>
      <!-- Location -->
      <b-form-group
        id="input-group-location"
        :label="$t('order.deliveryLocation')"
        label-for="location"
      >
        <b-form-radio-group v-model="orderLocationId" name="location" stacked>
          <b-form-radio
            v-for="location in $store.state.user.locations"
            :value="location.id"
            :key="location.id"
          >
            {{ location.address }}
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>

      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="!orderLocationId"
      >
        {{ $t("order.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("order.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";

export default {
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("order.createOrder"),
        },
      ],
      orderLocationId: null,
    };
  },
  mounted() {
    // select first location by default
    if (this.$store.state.user.locations) {
      this.orderLocationId = this.$store.state.user.locations[0].id;
    }
  },
  computed: {},
  methods: {
    handleCancel() {
      this.$router.push("/dashboard");
    },
    async handleCreateOrder() {
      await this.$store.dispatch("cart/createCart", this.orderLocationId);
      // await this.$store.dispatch("user/getUserInformation");
      this.$router.push("/orders/search");
    },
  },
};
</script>
