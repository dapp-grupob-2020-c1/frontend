<template>
  <form id="register-buyer-form">
    <b-form-group
      id="label-buyer-name"
      :label="$t('register.registerBuyer.buyerName')"
      label-for="buyer-name"
    >
      <b-form-input id="buyer-name" type="text" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-buyer-email"
      :label="$t('register.registerBuyer.buyerEmail')"
      label-for="buyer-email"
    >
      <b-form-input id="buyer-email" type="email" required></b-form-input>
    </b-form-group>
    <b-form-group
      id="label-buyer-password"
      :label="$t('register.registerBuyer.buyerPassword')"
      label-for="buyer-password"
    >
      <b-form-input id="buyer-password" type="password" required></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">
      {{ $t("register.registerSeller.submit") }}
    </b-button>
  </form>
</template>

<script>
export default {
  name: "RegisterBuyerForm",
  data() {
    return {};
  },
  computed: {}
};
</script>
