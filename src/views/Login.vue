<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("login.login") }}</h1>
        <b-card>
          <form @submit.prevent="handleLogin">
            <b-form-group
              id="input-group-username"
              :label="$t('login.username')"
              label-for="username"
            >
              <b-form-input
                id="username"
                type="text"
                name="username"
                autocomplete="username"
                required
                v-model="username"
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
            <!--            <b-button block variant="primary" type="submit">-->
            <!--              Iniciar Sesión-->
            <!--            </b-button>-->
            <b-form-row>
              <b-col>
                <b-button block variant="primary" @click="handleSellerLogin">
                  {{ $t("login.login_seller") }}
                </b-button>
              </b-col>
              <b-col>
                <b-button block variant="primary" @click="handleBuyerLogin">
                  {{ $t("login.login_buyer") }}
                </b-button>
              </b-col>
            </b-form-row>
          </form>
        </b-card>
        <p>
          {{ $t("login.dont_have_account") }}
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
      username: null,
      password: null
    };
  },
  methods: {
    handleLogin(userInfo) {
      this.$store.dispatch("auth/login", userInfo);
      this.$root.$bvToast.toast(this.$t("login.login_success"), {
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
