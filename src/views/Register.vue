<template>
  <PageContainer :title="$t('register.registerNewUser')" centered>
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
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
              ></b-form-input>
            </b-form-group>
            <b-button block variant="primary" type="submit">
              {{ $t("register.register") }}
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
        name: "Carlos Manager",
        email: "manager@example.com",
        password: "123456",
      },
    };
  },
  methods: {
    async handleRegister() {
      this.$store.dispatch("auth/register", this.userInformation);
    },
  },
};
</script>
