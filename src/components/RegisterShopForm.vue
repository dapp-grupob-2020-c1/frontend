<template>
  <form id="register-shop-form">
    <!-- Manager -->
    <h2 class="h3">{{ $t("register.registerSeller.managerInformation") }}</h2>
    <b-form-group
      id="label-seller-name"
      :label="$t('register.registerSeller.managerName')"
      label-for="seller-name"
    >
      <b-form-input id="seller-name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-seller-email"
      :label="$t('register.registerSeller.managerEmail')"
      label-for="seller-email"
    >
      <b-form-input id="seller-email" type="email" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-seller-password"
      :label="$t('register.registerSeller.managerPassword')"
      label-for="seller-password"
    >
      <b-form-input
        id="seller-password"
        type="password"
        required
      ></b-form-input>
    </b-form-group>

    <!-- Shop -->
    <h2 class="h3">{{ $t("register.registerSeller.shopInformation") }}</h2>
    <b-form-group
      id="label-shop-name"
      :label="$t('register.registerSeller.shopName')"
      label-for="shop-name"
    >
      <b-form-input id="shop-name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group :label="$t('register.registerSeller.shopCategories')">
      <b-form-checkbox-group
        id="shop-categories"
        v-model="selectedCategories"
        :options="availableShopCategories"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group :label="$t('register.registerSeller.shopPaymentOptions')">
      <b-form-checkbox-group
        id="shop-payment-methods"
        v-model="selectedPaymentMethods"
        :options="availablePaymentMethods"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group :label="$t('register.registerSeller.shopOpeningDays')">
      <b-form-checkbox-group
        id="shop-open-days"
        v-model="selectedWeekdays"
        :options="availableWeekdays"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group>
      <b-input-group
        :prepend="$t('register.registerSeller.shopOpeningHourFrom')"
      >
        <b-form-timepicker v-model="selectedTimeFrom"></b-form-timepicker>
      </b-input-group>
      <b-input-group :prepend="$t('register.registerSeller.shopOpeningHourTo')">
        <b-form-timepicker v-model="selectedTimeTo"></b-form-timepicker>
      </b-input-group>
    </b-form-group>

    <b-button type="submit" variant="primary">
      {{ $t("register.registerSeller.submit") }}
    </b-button>
  </form>
</template>

<script>
export default {
  name: "RegisterShopForm",
  data() {
    return {
      selectedCategories: [],
      selectedPaymentMethods: [],
      selectedWeekdays: [],
      selectedTimeFrom: null,
      selectedTimeTo: null
    };
  },
  computed: {
    availableShopCategories() {
      return this.$store.state.availableCategories;
    },
    availablePaymentMethods() {
      return this.$store.state.availablePaymentMethods;
    },
    availableWeekdays() {
      return [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];
    }
  }
};
</script>
