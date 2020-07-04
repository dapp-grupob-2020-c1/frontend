<template>
  <b-container class="my-5">
    <h1 class="h1">Cargar Listado</h1>
    <p>Se puede cargar un listado de multiples productos, en formato CSV.</p>

    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="my-3">Selected file: {{ file ? file.name : "" }}</div>

    <b-button variant="primary" size="lg" @click="handleCreateProduct">
      Cargar Archivo
    </b-button>
    <b-button variant="text" size="lg" @click="handleCancel">
      Cancelar
    </b-button>
  </b-container>
</template>

<script>
export default {
  name: "ProductsCreate",
  data() {
    return {
      file: null,
      name: null,
      brand: null,
      price: null,
      categories: []
    };
  },
  computed: {
    availableProductCategories() {
      return this.$store.state.availableCategories;
    }
  },
  methods: {
    handleCreateProduct() {
      console.log("//TODO handle create product");
    },
    handleCancel() {
      console.log("//TODO handle cancel");
      this.$router.back();
    }
  }
};
</script>
