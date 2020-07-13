<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.shopList") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <b-list-group v-if="shopsList.length">
      <b-list-group-item v-for="shop in shopsList" :key="shop.id">
        <div class="row">
          <div class="col-4 align-self-center">
            <GmapMap
              :center="{
                lat: shop.location.latitude,
                lng: shop.location.longitude
              }"
              :zoom="15"
              :options="{
                disableDefaultUI: true,
                fullscreenControl: false
              }"
              style="width: 100%; height: 200px"
            >
              <GmapMarker
                :position="{
                  lat: shop.location.latitude,
                  lng: shop.location.longitude
                }"
              />
            </GmapMap>
          </div>
          <div class="col">
            <h2 class="h3">{{ shop.name }}</h2>
            <p>{{ shop.location.address }}</p>
            <p>{{ $t("shop.deliveryRadius") }}: {{ shop.deliveryRadius }} Km</p>

            <h3 class="h6">{{ $t("shop.categories") }}</h3>
            <b-badge
              variant="secondary"
              v-for="category in shop.categories"
              :key="category"
            >
              {{ category }}
            </b-badge>

            <h3 class="h6">{{ $t("shop.paymentMethods") }}</h3>
            <p>
              <b-badge
                variant="secondary"
                v-for="paymentMethod in shop.paymentMethods"
                :key="paymentMethod"
                >{{ paymentMethod }}</b-badge
              >
            </p>

            <h3 class="h6">{{ $t("shop.openingDays") }}</h3>
            <p>
              {{ shop.openingHour }}-{{ shop.closingHour }},
              <b-badge
                variant="secondary"
                v-for="day in shop.days"
                :key="day"
                >{{ day }}</b-badge
              >
            </p>

            <div class="actions my-2">
              <b-button class="mr-2" :to="`/shops/${shop.id}`">
                Detalles
              </b-button>
              <b-button class="mr-2" variant="outline-danger">
                Eliminar
              </b-button>
            </div>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("shop.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/shops/create">
        {{ $t("shop.createNew") }}
      </b-button>
    </div>
  </b-container>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
export default {
  name: "ShopsList",
  components: { ErrorAlert },
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
  computed: {
    shopsList() {
      return this.$store.state.user.shops;
    }
  }
};
</script>
