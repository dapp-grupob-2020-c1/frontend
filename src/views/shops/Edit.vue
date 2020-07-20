<template>
  <PageContainer :title="$t('shop.edit')" :breadcrumb-items="breadcrumbItems">
    <form @submit.prevent="handleEditShop">
      <!-- Nombre -->
      <b-form-group
        id="input-group-name"
        :label="$t('shop.name')"
        label-for="name"
      >
        <b-form-input
          id="name"
          type="text"
          name="name"
          required
          autofocus
          v-model="shopInfo.name"
        ></b-form-input>
      </b-form-group>

      <!-- Imagen -->
      <b-form-group
        id="input-group-image"
        :label="$t('shop.image')"
        label-for="image"
      >
        <b-form-input
          id="image"
          type="text"
          name="image"
          v-model="shopInfo.imageUrl"
        ></b-form-input>
      </b-form-group>

      <div class="row">
        <div class="col-sm-6">
          <!-- Categorias -->
          <b-form-group
            id="input-group-types"
            :label="$t('shop.categories')"
            label-for="categories"
          >
            <b-form-checkbox-group
              v-model="shopInfo.categories"
              :options="$store.state.availableShopCategories"
              name="categories"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="col-sm-6">
          <!-- Payment Methods -->
          <b-form-group
            id="input-group-payment"
            :label="$t('shop.paymentMethods')"
            label-for="payment"
          >
            <b-form-checkbox-group
              v-model="shopInfo.paymentMethods"
              :options="$store.state.availablePaymentMethods"
              name="payment"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </div>

      <!-- Radio de Envío -->
      <b-form-group
        id="input-group-delivery"
        :label="$t('shop.deliveryRadius')"
        label-for="delivery-radius"
      >
        <b-input-group append="Kilómetros">
          <b-form-input
            id="delivery-radius"
            type="number"
            name="delivery-radius"
            required
            v-model="shopInfo.deliveryRadius"
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <div class="row">
        <div class="col-sm-6">
          <!-- Dias de la Semanana -->
          <b-form-group
            id="input-group-days"
            :label="$t('shop.openingDays')"
            label-for="days"
          >
            <b-form-checkbox-group
              v-model="shopInfo.days"
              :options="$store.state.availableDaysOfWeek"
              name="days"
              stacked
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
        <div class="col-sm-6">
          <!-- Opening -->
          <b-form-group
            id="input-group-opening"
            :label="$t('shop.openingHours')"
            label-for="opening"
          >
            <b-form-timepicker
              v-model="shopInfo.openingHour"
            ></b-form-timepicker>
          </b-form-group>
          <!-- Closing -->
          <b-form-group
            id="input-group-closing"
            :label="$t('shop.closingHours')"
            label-for="closing"
          >
            <b-form-timepicker
              v-model="shopInfo.closingHour"
            ></b-form-timepicker>
          </b-form-group>
        </div>
      </div>

      <b-button variant="primary" size="lg" type="submit">
        {{ $t("shop.submitEdit") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("shop.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import PageContainer from "../../components/PageContainer";

export default {
  name: "ShopsEdit",
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shop.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shop.edit"),
          to: `/shops/${this.$route.params.shopId}/edit`
        }
      ],
      shopInfo: {
        id: this.$route.params.shopId,
        name: null,
        categories: [],
        imageUrl: null,
        location: {
          address: "",
          coordinates: {
            lat: null,
            lng: null
          }
        },
        days: [],
        openingHour: null,
        closingHour: null,
        deliveryRadius: null,
        products: [],
        discounts: [],
        paymentMethods: [],
        turns: []
      }
    };
  },
  mounted() {
    // find shop info in user shops, and copy to local data
    const foundShop = this.$store.state.user.shops.find(shop => {
      return shop.id == this.$route.params.shopId;
    });
    this.shopInfo = { ...foundShop };
  },
  methods: {
    handleMapClick(e) {
      // update selected position
      this.shopInfo.location.coordinates = e.latLng.toJSON();
    },
    async handleEditShop() {
      //TODO: validate information
      await this.$store.dispatch("user/editShop", this.shopInfo);
      await this.$store.dispatch("user/getShops");
      this.$router.push(`/shops/${this.$route.params.shopId}`);
    },
    handleCancel() {
      this.$router.push("/shops");
    }
  }
};
</script>
