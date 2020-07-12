<template>
  <b-button
    id="google-auth-button"
    variant="outline-primary"
    block
    :href="generatedUrl()"
  >
    <img width="32" height="32" src="../assets/google.svg" alt="Google Logo" />
    {{ caption || $t("login.loginWithGoogle") }}
  </b-button>
</template>
<script>
export default {
  name: "GoogleAuthButton",
  props: {
    caption: {
      type: String
    }
  },
  methods: {
    generatedUrl() {
      const url = new URL(
        "/oauth2/authorize/google?redirect_uri='http://localhost:3000/#/oauth2/redirect'",
        process.env.VUE_APP_API_URL
      ).toString();
      return url;
    }
  }
};
</script>
