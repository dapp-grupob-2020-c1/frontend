<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("login.login") }}</h1>

        <ErrorAlert :request-info="requestInfo" />

        <b-card>
          <GoogleAuthButton />
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
                :disabled="requestInfo.loading"
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
                :disabled="requestInfo.loading"
              ></b-form-input>
            </b-form-group>
            <b-button
              block
              variant="primary"
              type="submit"
              :disabled="requestInfo.loading"
            >
              <b-spinner small v-if="requestInfo.loading"></b-spinner>
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
import { loginRequest } from "../api/authRequests";
import { defaultToasterOptions } from "../config/options";
import GoogleAuthButton from "../components/GoogleAuthButton";
import ErrorAlert from "../components/ErrorAlert";
export default {
  name: "Login",
  components: { ErrorAlert, GoogleAuthButton },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      userInformation: {
        email: "manager@example.com",
        password: "123456"
      }
    };
  },
  methods: {
    async handleLogin() {
      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };

      try {
        const response = await loginRequest(this.userInformation);
        this.$store.dispatch("auth/login", response.data.accessToken);
        this.$root.$bvToast.toast(
          this.$t("login.loginSuccess"),
          defaultToasterOptions
        );
      } catch (error) {
        this.requestInfo.error = true;
        // handle different error types
        if (error.response) {
          this.requestInfo.errorMessageKey = "app.responseError";
          this.requestInfo.errorAdditionalInfo = error.response.data.message;
        } else if (error.request) {
          this.requestInfo.errorMessageKey = "app.connectionError";
        }
      } finally {
        this.requestInfo.loading = false;
      }
    }
  }
};
</script>
