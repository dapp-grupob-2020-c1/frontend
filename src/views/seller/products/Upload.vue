<template>
  <b-container class="my-5">
    <h1 class="h1">{{ $t("product.upload.uploadFile") }}</h1>
    <p>{{ $t("product.upload.uploadDescription") }}</p>

    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      :placeholder="$t('product.upload.selectFilePlaceholder')"
      :drop-placeholder="$t('product.upload.dropFilePlaceholder')"
      :browse-text="$t('product.upload.selectFileBrowseText')"
    ></b-form-file>

    <div class="my-3">
      {{ $t("product.upload.selectedFile") }}: {{ file ? file.name : "" }}
    </div>

    <b-button variant="primary" size="lg" @click="handleCreateProduct">
      {{ $t("product.upload.submit") }}
    </b-button>
    <b-button variant="text" size="lg" @click="handleCancel">
      {{ $t("product.upload.cancel") }}
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
