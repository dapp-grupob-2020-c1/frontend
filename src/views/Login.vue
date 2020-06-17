<template>
  <b-container>
    <b-row align-h="center" align-v="center" class="my-5">
      <b-col cols="6">
        <h1>Iniciar Sesión</h1>
        <b-card>
          <b-form-group
            id="input-group-username"
            label="Usuario"
            label-for="username"
          >
            <b-form-input
              id="username"
              type="text"
              name="username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-password"
            label="Contraseña"
            label-for="password"
          >
            <b-form-input
              id="password"
              type="password"
              name="password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button block variant="primary">
            Iniciar Sesión
          </b-button>
        </b-card>
        <p>
          No tenés cuenta?
          <router-link to="/register">Registrar nuevo usuario</router-link>.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  components: {}
};
</script>
