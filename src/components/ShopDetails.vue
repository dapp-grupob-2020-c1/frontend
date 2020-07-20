<template>
  <div class="shop-details row">
    <div class="col-sm-6 col-lg-4 col-xl-3 order-sm-1">
      <b-img fluid-grow rounded :src="shopImage" />
    </div>
    <div class="col order-sm-0">
      <h2 class="h3">{{ shop.name }}</h2>
      <p v-if="shop.location && shop.location.address">
        {{ shop.location.address }}
      </p>
      <p>{{ $t("shop.deliveryRadius") }}: {{ shop.deliveryRadius }} Km</p>
      <div class="shop-categories" v-if="expanded">
        <h3 class="h6">{{ $t("shop.categories") }}</h3>
        <p>
          <b-badge
            variant="secondary"
            v-for="category in shop.categories"
            :key="category"
          >
            {{ category }}
          </b-badge>
        </p>

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
          <b-badge variant="secondary" v-for="day in shop.days" :key="day">{{
            day
          }}</b-badge>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopDetails",
  props: {
    shop: {
      type: Object,
      required: true,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    shopImage() {
      if (!this.shop.imageUrl) {
        return require("../assets/shop-placeholder.png");
      }
      return this.shop.imageUrl;
    },
  },
};
</script>
