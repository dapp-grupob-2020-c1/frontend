<template>
  <PageContainer :title="$t('login.login')" centered>
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <b-overlay :show="$store.state.requests.loading">
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
                ></b-form-input>
              </b-form-group>
              <b-button block variant="primary" type="submit">
                {{ $t("login.login") }}
              </b-button>
            </form>
          </b-card>
        </b-overlay>
        <p class="my-1">
          {{ $t("login.dontHaveAccount") }}
          <router-link to="/register">{{ $t("login.register") }}</router-link
          >.
        </p>
      </b-col>
    </b-row>
  </PageContainer>
</template>

<script>
import GoogleAuthButton from "../components/GoogleAuthButton";
import PageContainer from "../components/PageContainer";
export default {
  components: { PageContainer, GoogleAuthButton },
  data() {
    return {
      userInformation: {
        email: "manager@example.com",
        password: "123456"
      }
    };
  },
  methods: {
    handleLogin() {
      this.$store.dispatch("auth/login", this.userInformation);
    }
  }
};
</script>
