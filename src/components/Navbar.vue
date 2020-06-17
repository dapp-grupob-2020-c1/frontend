<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <img alt="logo" src="../assets/logo.png" style="max-height:60px;" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/search">Buscar</b-nav-item>
        <b-nav-item to="/map">Mapa</b-nav-item>
        <b-nav-item to="/about">Acerca De</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/register">Registrarse</b-nav-item>
        <b-button to="/login" variant="outline-primary">
          Iniciar Sesión
        </b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
