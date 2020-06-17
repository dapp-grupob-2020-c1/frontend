<template>
  <b-container class="bv-example-row">
    <b-row align-h="center" align-v="center" class="my-5">
      <b-col cols="6">
        <h1>Registrar Nuevo Usuario</h1>
        <b-card no-body>
          <b-tabs card content-class="mt-3">
            <b-tab title="Comprador" active>
              <form id="customer-form" @submit.prevent="handleCustomerForm">
                <b-form-group
                  id="label-customer-name"
                  label="Nombre Completo"
                  label-for="customer-name"
                >
                  <b-form-input
                    id="customer-name"
                    type="text"
                    v-model="customer.name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="label-customer-email"
                  label="Email"
                  label-for="customer-email"
                >
                  <b-form-input
                    id="customer-email"
                    type="email"
                    v-model="customer.email"
                    autocomplete="username"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="label-customer-password"
                  label="Contraseña"
                  label-for="customer-password"
                >
                  <b-form-input
                    id="customer-password"
                    type="password"
                    v-model="customer.password"
                    autocomplete="new-password"
                    required
                  ></b-form-input>
                </b-form-group>
                <p class="text-right m-0">
                  <b-button type="submit" variant="primary">
                    Registrar Comprador
                  </b-button>
                </p>
              </form>
            </b-tab>
            <b-tab title="Vendedor">
              <p>wip</p>
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
export default {
  name: "Login",
  data() {
    return {
      customer: {
        name: null,
        password: null,
        email: null
      },
      seller: {
        username: null,
        password: null,
        email: null
      }
    };
  },
  methods: {
    async handleCustomerForm() {
      console.log("customer registration");
      const response = await registerCustomer(this.customer);
      console.log(response);
    },
    handleSellerForm() {}
  },
  components: {}
};
</script>
