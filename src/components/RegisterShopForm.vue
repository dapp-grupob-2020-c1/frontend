<template>
  <form id="register-shop-form">
    <!-- Manager -->
    <h2 class="h3">Datos del Manager</h2>
    <b-form-group
      id="label-seller-name"
      label="Nombre Completo"
      label-for="seller-name"
    >
      <b-form-input id="seller-name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-seller-email"
      label="Email"
      label-for="seller-email"
    >
      <b-form-input id="seller-email" type="email" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-seller-password"
      label="Password"
      label-for="seller-password"
    >
      <b-form-input
        id="seller-password"
        type="password"
        required
      ></b-form-input>
    </b-form-group>

    <!-- Shop -->
    <h2 class="h3">Datos del Negocio</h2>
    <b-form-group id="label-shop-name" label="Nombre" label-for="shop-name">
      <b-form-input id="shop-name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group label="Categorías">
      <b-form-checkbox-group
        id="shop-categories"
        v-model="selectedCategories"
        :options="availableShopCategories"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Medios de Pago">
      <b-form-checkbox-group
        id="shop-payment-methods"
        v-model="selectedPaymentMethods"
        :options="availablePaymentMethods"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group label="Dias de Atención">
      <b-form-checkbox-group
        id="shop-open-days"
        v-model="selectedWeekdays"
        :options="availableWeekdays"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group>
      <b-input-group prepend="Desde">
        <b-form-timepicker v-model="selectedTimeFrom"></b-form-timepicker>
      </b-input-group>
      <b-input-group prepend="Hasta">
        <b-form-timepicker v-model="selectedTimeTo"></b-form-timepicker>
      </b-input-group>
    </b-form-group>

    <b-button type="submit" variant="primary">
      Registrar Vendedor
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
