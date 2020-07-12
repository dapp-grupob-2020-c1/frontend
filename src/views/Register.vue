<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>{{ $t("register.registerNewUser") }}</h1>
        <b-card>
          <b-button block variant="outline-primary">
            <img width="32" height="32" src="../assets/google.svg" />
            {{ $t("register.registerWithGoogle") }}
          </b-button>
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
                v-model="name"
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
                v-model="email"
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
                v-model="password"
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
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    handleRegister() {
      console.log("TOOD: handle register");
    }
  }
};
</script>
