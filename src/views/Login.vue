<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>Iniciar Sesión</h1>
        <b-card>
          <form @submit.prevent="handleLogin">
            <b-form-group
              id="input-group-username"
              label="Usuario"
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
              label="Contraseña"
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
                  Iniciar Sesión (Seller)
                </b-button>
              </b-col>
              <b-col>
                <b-button block variant="primary" @click="handleBuyerLogin">
                  Iniciar Sesión (Buyer)
                </b-button>
              </b-col>
            </b-form-row>
          </form>
        </b-card>
        <p>
          No tenés cuenta?
          <router-link to="/register">Registrar nuevo usuario</router-link>.
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
      console.log("enviando login!", userInfo);
      this.$store.dispatch("auth/login", userInfo);
      this.$root.$bvToast.toast("Sesión Iniciada Correctamente", {
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
