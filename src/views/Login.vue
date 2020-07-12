<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("login.login") }}</h1>
        <b-card>
          <b-button block variant="outline-primary">
            <img width="32" height="32" src="../assets/google.svg" />
            {{ $t("login.loginWithGoogle") }}
          </b-button>
          <hr class="my-3" />
          <form @submit.prevent="handleLogin">
            <b-form-group
              id="input-group-email"
              :label="$t('login.email')"
              label-for="email"
            >
              <b-form-input
                id="email"
                type="text"
                name="email"
                autocomplete="email"
                required
                v-model="email"
                autofocus
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-password"
              :label="$t('login.password')"
              label-for="password"
            >
              <b-form-input
                id="password"
                type="password"
                name="password"
                autocomplete="current-password"
                required
                v-model="password"
              ></b-form-input>
            </b-form-group>
            <b-button block variant="primary" type="submit">
              Iniciar Sesión
            </b-button>
          </form>
        </b-card>
        <p class="my-1">
          {{ $t("login.dontHaveAccount") }}
          <router-link to="/register">{{ $t("login.register") }}</router-link
          >.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin(userInfo) {
      this.$store.dispatch("auth/login", userInfo);
      this.$root.$bvToast.toast(this.$t("login.loginSuccess"), {
        variant: "success",
        toaster: "b-toaster-top-right",
        noCloseButton: true,
        autoHideDelay: 4000
      });
    },
    handleSellerLogin() {
      const sellerInfo = {
        name: "Juan Seller",
        type: "seller"
      };
      this.handleLogin(sellerInfo);
    },
    handleBuyerLogin() {
      const buyerInfo = {
        name: "Roberto Buyer",
        type: "buyer"
      };
      this.handleLogin(buyerInfo);
    }
  }
};
</script>
