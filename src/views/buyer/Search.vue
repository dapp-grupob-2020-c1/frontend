<template>
  <b-container class="my-5">
    <!-- Buscar -->
    <div class="mb-5">
      <h1 class="h1">Buscar Productos</h1>
      <b-card>
        <b-form-input id="query" name="query" v-model="query"></b-form-input>
        <b-button block variant="primary" @click="handleSearch">
          Buscar
        </b-button>
      </b-card>
    </div>

    <!-- Resultados -->
    <div class="mb-5">
      <h2 class="h3">Resultados</h2>
      <ProductListItem
        v-for="item in searchResults"
        :key="item.id"
        :product="item"
      />
    </div>
  </b-container>
</template>

<script>
import ProductListItem from "../../components/ProductListItem";
export default {
  name: "Search",
  components: { ProductListItem },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    searchResults() {
      return this.$store.state.buyer.searchResults;
    }
  },
  methods: {
    handleSearch() {
      this.$store.dispatch("buyer/beginSearch", this.query);
    }
  }
};
</script>
