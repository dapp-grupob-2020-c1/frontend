<template>
  <div class="shop-details">
    <b-media vertical-align="center">
      <template v-slot:aside>
        <b-img fluid rounded :src="shopImage" width="128" height="128" />
      </template>
      <h2 class="h3">{{ shop.name }}</h2>
      <p v-if="shop.location && shop.location.address">
        {{ shop.location.address }}
      </p>
      <p>{{ $t("shop.deliveryRadius") }}: {{ shop.deliveryRadius }} Km</p>
      <div class="shop-expanded-details border-top my-2 py-2" v-if="expanded">
        <div class="row">
          <div class="col">
            <h3 class="h5">{{ $t("shop.categories") }}</h3>
            <ul>
              <li v-for="category in shop.categories" :key="category">
                {{ $t(`shopCategories.${category}`) }}
              </li>
            </ul>
          </div>
          <div class="col">
            <h3 class="h5">{{ $t("shop.paymentMethods") }}</h3>
            <ul>
              <li
                v-for="paymentMethod in shop.paymentMethods"
                :key="paymentMethod"
              >
                {{ $t(`paymentMethods.${paymentMethod}`) }}
              </li>
            </ul>
          </div>
          <div class="col">
            <h3 class="h5">{{ $t("shop.openingDays") }}</h3>
            <ul>
              <li v-for="day in shop.days" :key="day">
                {{ $t(`days.${day}`) }}
              </li>
            </ul>
            <p>{{ shop.openingHour }}-{{ shop.closingHour }}</p>
          </div>
        </div>
      </div>
    </b-media>
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
