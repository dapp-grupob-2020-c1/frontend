<template>
  <div class="shop-shipping-selection">
    <b-card-title>{{ shop.name }}</b-card-title>

    <!-- Payment Method -->
    <h4 class="h5">{{ $t("order.paymentMethod") }}</h4>
    <b-form-group :label="$t('order.paymentMethods')">
      <b-form-radio-group
        v-model="selectedPaymentMethod"
        :options="paymentMethodOptions"
        buttons
        button-variant="outline-primary"
        name="payment-method"
      />
    </b-form-group>

    <!-- Shipping Method -->
    <h4 class="h5">{{ $t("order.shippingOption") }}</h4>
    <b-form-group :label="$t('order.shippingOptions')">
      <b-form-radio-group
        v-model="selectedDeliveryMethod"
        :options="deliveryMethods"
        buttons
        button-variant="outline-primary"
        name="shipping-option"
      />
    </b-form-group>

    <!-- Shipping Turn -->
    <h4 class="h5">{{ $t("order.shippingTurn") }}</h4>
    <b-form-group :label="$t('order.shippingTurns')">
      <div style="max-height: 20vh; overflow-y: scroll;">
        <b-form-radio-group
          v-model="selectedTurnOption"
          :options="turnOptions"
          :name="`shipping-turn-${shopNameConverted}`"
          stacked
        />
      </div>
    </b-form-group>
  </div>
</template>
<script>
import { generateOptions } from "../functions/dateHelpers";

export default {
  data() {
    return {
      selectedTurnOption: null,
      selectedDeliveryMethod: null,
      selectedPaymentMethod: null,
      deliveryMethods: [
        {
          text: this.$t("shipping.delivery"),
          value: "delivery",
        },
        {
          text: this.$t("shipping.takeaway"),
          value: "takeaway",
        },
      ],
      turnOptions: [],
    };
  },
  mounted() {
    // generate turn options
    const formattedOptions = generateOptions(
      this.shop.days,
      this.shop.openingHour,
      this.shop.closingHour
    ).map((intervalOption) => {
      return {
        text: intervalOption.start.toLocaleString({
          weekday: "short",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
        value: intervalOption.start.toISO(),
      };
    });
    this.turnOptions = formattedOptions;

    // preselect first option
    this.selectedTurnOption = this.turnOptions[0].value;
    this.selectedDeliveryMethod = this.deliveryMethods[0].value;
    this.selectedPaymentMethod = this.shop.paymentMethods[0];
  },
  props: {
    shop: {
      type: Object,
    },
  },
  computed: {
    paymentMethodOptions() {
      return this.shop.paymentMethods.map((method) => {
        const translatedPaymentMethod = this.$t(
          `paymentMethods.${this.$t(method)}`
        );
        return {
          text: translatedPaymentMethod,
          value: method,
        };
      });
    },
    shopNameConverted() {
      return this.shop.name
        .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, "-") // replace all spaces and low dash
        .toLowerCase();
    },
  },
  methods: {},
};
</script>
