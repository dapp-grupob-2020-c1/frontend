<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <img alt="logo" src="../assets/logo.png" style="max-height:60px;" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/search">Buscar</b-nav-item>
        <b-nav-item to="/map">Mapa</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/register" v-if="!isAuthenticated">
          Registrarse
        </b-nav-item>
        <b-button to="/login" variant="outline-primary" v-if="!isAuthenticated">
          Iniciar Sesión
        </b-button>

        <NavbarShoppingCart />

        <b-nav-item-dropdown
          v-if="isAuthenticated"
          :text="$store.state.auth.name"
          right
        >
          <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
          <b-dropdown-item to="/cart">Shopping Cart</b-dropdown-item>
          <b-dropdown-item @click="handleLogout">Cerrar Sesión</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavbarShoppingCart from "./NavbarShoppingCart";
export default {
  name: "Navbar",
  components: { NavbarShoppingCart },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
