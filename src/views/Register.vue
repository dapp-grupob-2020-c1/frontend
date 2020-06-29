<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>Registrar Nuevo Usuario</h1>
        <b-card no-body>
          <b-tabs card content-class="mt-3">
            <b-tab title="Comprador" active>
              <RegisterBuyerForm />
            </b-tab>
            <b-tab title="Vendedor">
              <RegisterShopForm />
            </b-tab>
          </b-tabs>
        </b-card>
        <p>
          Ya tenés cuenta?
          <router-link to="/login">Iniciar Sesión</router-link>.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { registerCustomer } from "../api/register";
import RegisterShopForm from "../components/RegisterShopForm";
import RegisterBuyerForm from "../components/RegisterBuyerForm";
export default {
  name: "Login",
  components: {
    RegisterBuyerForm,
    RegisterShopForm
  }
};
</script>
