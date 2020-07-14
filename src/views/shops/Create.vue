<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/shops/create">
        {{ $t("shop.createNew") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.createNew") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <form @submit.prevent="handleCreateShop">
      <!-- openingHour, closingHour -->

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

      <!-- Dirección -->
      <b-form-group
        id="input-group-address"
        :label="$t('location.address')"
        label-for="address"
      >
        <b-form-input
          id="address"
          type="text"
          name="address"
          required
          v-model="shopInfo.location.address"
        ></b-form-input>
      </b-form-group>

      <!-- Coordenadas -->
      <b-form-group
        id="input-group-coordinates"
        :label="$t('location.coordinates')"
        :description="$t('location.coordinatesDescription')"
      >
        <GmapMap
          ref="map"
          @click="handleMapClick"
          :center="{ lat: -34.90385708261236, lng: -58.20926714017421 }"
          :zoom="9"
          style="width: 100%; height: 300px"
        >
          <GmapMarker
            :position="shopInfo.location.coordinates"
            v-if="
              shopInfo.location.coordinates.lat &&
                shopInfo.location.coordinates.lng
            "
          />
        </GmapMap>
      </b-form-group>

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

      <!-- Opening -->
      <b-form-group
        id="input-group-opening"
        :label="$t('shop.openingHours')"
        label-for="opening"
      >
        <b-form-timepicker v-model="shopInfo.openingHour"></b-form-timepicker>
      </b-form-group>

      <!-- Closing -->
      <b-form-group
        id="input-group-closing"
        :label="$t('shop.closingHours')"
        label-for="closing"
      >
        <b-form-timepicker v-model="shopInfo.closingHour"></b-form-timepicker>
      </b-form-group>

      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="requestInfo.loading"
      >
        {{ $t("shop.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("shop.cancel") }}
      </b-button>
    </form>
  </b-container>
</template>

<script>
import { createShopRequest } from "../../api/shopRequests";
import { defaultToasterOptions } from "../../config/options";
import ErrorAlert from "../../components/ErrorAlert";

export default {
  name: "ShopsCreate",
  components: { ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      shopInfo: {
        name: null,
        categories: [],
        location: {
          address: "",
          coordinates: {
            lat: null,
            lng: null
          }
        },
        days: null,
        openingHour: null,
        closingHour: null,
        paymentMethods: null,
        deliveryRadius: null
      }
    };
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
    async handleCreateShop() {
      // //TODO: validate information

      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };
      try {
        const response = await createShopRequest(this.shopInfo);
        console.log(response);
        //this.$store.dispatch("user/addLocation", response.data);
        this.$root.$bvToast.toast(
          this.$t("shop.createSuccess"),
          defaultToasterOptions
        );
        this.$router.back();
      } catch (e) {
        console.error(e);
        this.requestInfo.error = true;
        this.requestInfo.errorMessageKey = "app.requestError";
      } finally {
        this.requestInfo.loading = false;
      }
    },
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>
