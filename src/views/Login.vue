<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("login.login") }}</h1>

        <b-alert variant="danger" :show="!!error" dismissible>
          Hubo un error.
          <span v-b-toggle.error-details>Detalles</span>.
          <b-collapse id="error-details" class="mt-2">
            {{ error }}
          </b-collapse>
        </b-alert>

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
                v-model="userInformation.email"
                :disabled="loading"
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
                v-model="userInformation.password"
                :disabled="loading"
              ></b-form-input>
            </b-form-group>
            <b-button block variant="primary" type="submit" :disabled="loading">
              <b-spinner small v-if="loading"></b-spinner>
              <span v-else>{{ $t("login.login") }}</span>
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
import { loginUser } from "../api/login";
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      error: null,
      userInformation: {
        email: "carlos@example.com",
        password: "123456"
      }
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = null;
      try {
        const response = await loginUser(this.userInformation);
        this.$root.$bvToast.toast(this.$t("login.loginSuccess"), {
          variant: "success",
          toaster: "b-toaster-top-right",
          noCloseButton: true,
          autoHideDelay: 4000
        });
        this.$store.dispatch("auth/login", response.data.token);
      } catch (error) {
        // TODO: handle all possible errors (and translate message)
        console.error(error.response.data);
        this.error = error.response.data.message;
      }
      this.loading = false;
    }
  }
};
</script>
