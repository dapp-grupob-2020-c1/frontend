<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("product.create.createNewProduct") }}</h1>

    <b-form-group
      id="input-group-name"
      :label="$t('product.create.productName')"
      label-for="name"
    >
      <b-form-input
        id="name"
        type="text"
        name="name"
        required
        v-model="name"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-brand"
      :label="$t('product.create.productBrand')"
      label-for="brand"
    >
      <b-form-input
        id="brand"
        type="text"
        name="brand"
        required
        v-model="brand"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-image"
      :label="$t('product.create.productImage')"
      label-for="image"
    >
      <b-form-input
        id="image"
        type="text"
        name="image"
        required
        v-model="image"
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-price"
      :label="$t('product.create.productPrice')"
      label-for="price"
    >
      <b-form-input
        id="price"
        type="number"
        name="price"
        required
        v-model="price"
      ></b-form-input>
    </b-form-group>

    <b-form-group :label="$t('product.create.productCategories')">
      <b-form-checkbox-group
        id="shop-categories"
        v-model="categories"
        :options="availableProductCategories"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <b-button variant="primary" size="lg" @click="handleCreateProduct">
      {{ $t("product.create.submit") }}
    </b-button>
    <b-button variant="text" size="lg" @click="handleCancel">
      {{ $t("product.create.cancel") }}
    </b-button>
  </b-container>
</template>

<script>
import { defaultToasterOptions } from "../../../config/options";

export default {
  name: "ProductsCreate",
  data() {
    return {
      name: "",
      brand: "",
      image: "",
      price: null,
      categories: []
    };
  },
  computed: {
    availableProductCategories() {
      return this.$store.state.availableProductCategories;
    }
  },
  methods: {
    handleCreateProduct() {
      console.log("//TODO handle create product");

      //TODO: validate product information
      const newProduct = {
        name: this.name,
        brand: this.brand,
        image: this.image,
        price: this.price,
        categories: this.categories
      };
      this.$store.dispatch("seller/addProduct", newProduct);
      this.$root.$bvToast.toast(
        this.$t("product.create.successfulCreation"),
        defaultToasterOptions
      );
      this.$router.back();
    },
    handleCancel() {
      console.log("//TODO handle cancel");
      this.$router.back();
    }
  }
};
</script>
