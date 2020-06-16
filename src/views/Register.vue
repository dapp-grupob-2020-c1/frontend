<template>
  <b-container class="bv-example-row">
    <b-row align-h="center" align-v="center" class="my-5">
      <b-col cols="8">
        <h1>Registrar Nuevo Usuario</h1>
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
          <b-button block variant="primary">Iniciar Sesión</b-button>
        </b-card>
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
