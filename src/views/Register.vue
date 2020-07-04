<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("register.register_new_user") }}</h1>
        <b-card no-body>
          <b-tabs card content-class="mt-3">
            <b-tab :title="$t('register.buyer')" active>
              <RegisterBuyerForm />
            </b-tab>
            <b-tab :title="$t('register.seller')">
              <RegisterShopForm />
            </b-tab>
          </b-tabs>
        </b-card>
        <p>
          {{ $t("register.already_have_account") }}
          <router-link to="/login">{{ $t("register.login") }}</router-link
          >.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RegisterBuyerForm from "../components/RegisterBuyerForm";
import RegisterShopForm from "../components/RegisterShopForm";
export default {
  name: "Login",
  components: {
    RegisterBuyerForm,
    RegisterShopForm
  }
};
</script>
