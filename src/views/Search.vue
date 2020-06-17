<template>
  <b-container class="bv-example-row">
    <b-row align-h="center" align-v="center" class="my-5">
      <b-col>
        <h1>Buscar Productos</h1>
        <b-card>
          <b-form-input
            id="query"
            type="text"
            name="query"
            v-model="query"
            required
          ></b-form-input>
          <b-button block variant="primary" v-on:click="getResults"
            >Buscar</b-button
          >
        </b-card>
        <b-card v-if="results">
          <p>Resultados:</p>
          {{ results }}
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getSearch } from "../api/search";

export default {
  name: "Login",
  data: () => {
    return {
      query: "",
      results: null
    };
  },
  components: {},
  methods: {
    async getResults() {
      this.results = await getSearch(this.query);
    }
  }
};
</script>
