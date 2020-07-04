<template>
  <b-container class="my-5">
    <h1 class="h1">Cargar Nuevo Producto</h1>
    <b-form-group id="input-group-name" label="Nombre" label-for="name">
      <b-form-input
        id="name"
        type="text"
        name="name"
        required
        v-model="name"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-brand" label="Marca" label-for="brand">
      <b-form-input
        id="brand"
        type="text"
        name="brand"
        required
        v-model="brand"
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-price" label="Precio" label-for="price">
      <b-form-input
        id="price"
        type="number"
        name="price"
        required
        v-model="price"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Categorías">
      <b-form-checkbox-group
        id="shop-categories"
        v-model="categories"
        :options="availableProductCategories"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-button variant="primary" size="lg" @click="handleCreateProduct">
      Crear Producto
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
