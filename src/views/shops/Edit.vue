<template>
  <PageContainer
    :title="$t('shop.edit')"
    :breadcrumb-items="breadcrumbItems"
    :request-info="requestInfo"
  >
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
              :options="daysOfWeek"
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

      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="requestInfo.loading"
      >
        {{ $t("shop.submitEdit") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("shop.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import { editShopRequest, getShopRequest } from "../../api/shopRequests";
import { defaultToasterOptions } from "../../config/options";
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
          to: `/shops/${this.$route.params.id}/edit`
        }
      ],
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      shopInfo: {
        id: this.$route.params.id,
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
    this.getRemoteShopInfo();
  },
  computed: {
    daysOfWeek() {
      return [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY"
      ];
    }
  },
  methods: {
    handleMapClick(e) {
      // update selected position
      this.shopInfo.location.coordinates = e.latLng.toJSON();
    },
    async handleEditShop() {
      //TODO: validate information

      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };
      try {
        const response = await editShopRequest(this.shopInfo);
        console.log(response);
        // this.$store.dispatch("user/addShop", response.data);
        this.$root.$bvToast.toast(
          this.$t("shop.editSuccess"),
          defaultToasterOptions
        );
        this.$router.push(`/shops/${this.$route.params.id}`);
      } catch (e) {
        console.error(e);
        this.requestInfo.error = true;
        // TODO: handle all possible errors
        this.requestInfo.errorMessageKey = "app.requestError";
      } finally {
        this.requestInfo.loading = false;
      }
    },
    handleCancel() {
      this.$router.push(`/shops/${this.$route.params.id}`);
    },
    async getRemoteShopInfo() {
      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };
      try {
        const response = await getShopRequest(this.$route.params.id);
        this.shopInfo = Object.assign({}, this.shopInfo, response.data);
      } catch (e) {
        console.error(e);
        this.requestInfo.error = true;
        // TODO: handle all possible errors
        this.requestInfo.errorMessageKey = "app.requestError";
      } finally {
        this.requestInfo.loading = false;
      }
    }
  }
};
</script>
