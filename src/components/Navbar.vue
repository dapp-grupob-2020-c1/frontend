<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <img
        :alt="`Logo ${$t('app.appName')}`"
        src="../assets/logo.png"
        style="max-height:60px;"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <LocaleChanger />
        <b-nav-item to="/search">{{ $t("navbar.search") }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- Authenticated -->
        <template v-if="isAuthenticated">
          <NavbarShoppingCart />
          <b-nav-item to="/dashboard">
            {{ $t("navbar.dashboard") }}
          </b-nav-item>
          <b-nav-item @click="handleLogout">
            {{ $t("navbar.logout") }}
          </b-nav-item>
        </template>
        <!-- Anonymous, Not Authenticated -->
        <template v-else>
          <b-nav-item to="/register" v-if="!isAuthenticated">
            {{ $t("navbar.register") }}
          </b-nav-item>
          <b-button
            to="/login"
            variant="outline-primary"
            v-if="!isAuthenticated"
          >
            {{ $t("navbar.login") }}
          </b-button>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavbarShoppingCart from "./NavbarShoppingCart";
import LocaleChanger from "./LocaleChanger";
import { defaultToasterOptions } from "../config/options";
export default {
  name: "Navbar",
  components: { LocaleChanger, NavbarShoppingCart },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.authenticated;
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
