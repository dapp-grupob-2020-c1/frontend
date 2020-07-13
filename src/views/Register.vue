<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("register.registerNewUser") }}</h1>

        <b-alert variant="danger" :show="!!error" dismissible>
          Hubo un error.
          <span v-b-toggle.error-details>Detalles</span>.
          <b-collapse id="error-details" class="mt-2">
            {{ error }}
          </b-collapse>
        </b-alert>

        <b-card>
          <GoogleAuthButton :caption="$t('register.registerWithGoogle')" />
          <hr class="my-3" />
          <form @submit.prevent="handleRegister">
            <b-form-group
              id="input-group-name"
              :label="$t('register.name')"
              label-for="name"
            >
              <b-form-input
                id="name"
                type="text"
                name="name"
                autocomplete="name"
                required
                v-model="userInformation.name"
                :disabled="loading"
                autofocus
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-email"
              :label="$t('register.email')"
              label-for="email"
            >
              <b-form-input
                id="email"
                type="email"
                name="email"
                autocomplete="email"
                required
                v-model="userInformation.email"
                :disabled="loading"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-password"
              :label="$t('register.password')"
              label-for="password"
            >
              <b-form-input
                id="password"
                type="password"
                name="password"
                autocomplete="new-password"
                required
                v-model="userInformation.password"
                :disabled="loading"
              ></b-form-input>
            </b-form-group>
            <b-button block variant="primary" type="submit" :disabled="loading">
              <b-spinner small v-if="loading"></b-spinner>
              <span v-else>{{ $t("register.register") }}</span>
            </b-button>
          </form>
        </b-card>
        <p class="my-1">
          {{ $t("register.alreadyHaveAccount") }}
          <router-link to="/login">{{ $t("register.login") }}</router-link
          >.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { registerRequest } from "../api/authRequests";
import GoogleAuthButton from "../components/GoogleAuthButton";
import { defaultToasterOptions } from "../config/options";
export default {
  name: "Register",
  components: { GoogleAuthButton },
  data() {
    return {
      loading: false,
      error: null,
      userInformation: {
        name: "Carlos Manager",
        email: "manager@example.com",
        password: "123456"
      }
    };
  },
  methods: {
    async handleRegister() {
      this.loading = true;
      this.error = null;
      try {
        await registerRequest(this.userInformation);
        this.$root.$bvToast.toast(
          this.$t("register.registerSuccess"),
          defaultToasterOptions
        );
        this.$router.push("/login");
      } catch (error) {
        this.error = error.response.data.message;
        console.error("REQ ERROR: ", error);
      }
      this.loading = false;
    }
  }
};
</script>
