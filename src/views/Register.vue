<template>
  <b-container class="my-5">
    <b-row align-h="center" align-v="center">
      <b-col cols="12" md="8" lg="6">
        <h1>Registrar Nuevo Usuario</h1>
        <b-card no-body v-if="!done">
          <b-tabs card content-class="mt-3">
            <b-tab title="Comprador" active>
              <b-alert show variant="danger" v-if="error">
                Hubo un error.
              </b-alert>
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
                  <b-button type="submit" variant="primary" :disabled="loading">
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
        <b-alert show variant="success" align="center" v-else>
          Registro completado
        </b-alert>
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
      loading: false,
      error: false,
      done: false,
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
      console.log("handle customer registration");
      this.loading = true;
      this.error = false;

      const response = await registerCustomer(this.customer);
      const responseData = await response.json();

      if (response.status < 200 || response.status >= 300) {
        // handle errors
        this.error = true;
        console.log("error en request", responseData, response.statusText);
      } else {
        // handle response data
        console.log("response data", responseData);
        this.done = true;
      }

      this.loading = false;
    },
    handleSellerForm() {}
  },
  components: {}
};
</script>
