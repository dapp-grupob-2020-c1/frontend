<template>
  <PageContainer
    :title="$t('shop.createProduct')"
    :breadcrumb-items="breadcrumbItems"
  >
    <form @submit.prevent="handleCreateProduct">
      <!-- id, name, brand, image, price, types -->

      <!-- Nombre -->
      <b-form-group
        id="input-group-name"
        :label="$t('product.name')"
        label-for="name"
      >
        <b-form-input
          id="name"
          type="text"
          name="name"
          required
          autofocus
          v-model="product.name"
        ></b-form-input>
      </b-form-group>

      <!-- Marca -->
      <b-form-group
        id="input-group-brand"
        :label="$t('product.brand')"
        label-for="brand"
      >
        <b-form-input
          id="brand"
          type="text"
          name="brand"
          required
          v-model="product.brand"
        ></b-form-input>
      </b-form-group>

      <!-- Imagen -->
      <b-form-group
        id="input-group-image"
        :label="$t('product.image')"
        label-for="image"
      >
        <b-form-input
          id="image"
          type="text"
          name="image"
          v-model="product.image"
        ></b-form-input>
      </b-form-group>

      <!-- Imagen -->
      <b-form-group
        id="input-group-price"
        :label="$t('product.price')"
        label-for="price"
      >
        <b-form-input
          id="price"
          type="number"
          name="price"
          required
          v-model="product.price"
        ></b-form-input>
      </b-form-group>

      <!-- Tipo -->
      <b-form-group
        id="input-group-types"
        :label="$t('product.types')"
        label-for="types"
      >
        <b-form-checkbox-group
          v-model="product.types"
          :options="productTypesOptions"
          name="types"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <b-button variant="primary" size="lg" type="submit">
        {{ $t("product.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("product.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import PageContainer from "../../../components/PageContainer";

export default {
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("shop.shopList"),
          to: "/shops",
        },
        {
          text: this.$t("shop.viewDetails"),
          to: `/shops/${this.$route.params.shopId}/`,
        },
        {
          text: this.$t("shop.viewProducts"),
          to: `/shops/${this.$route.params.shopId}/products`,
        },
        {
          text: this.$t("shop.createProduct"),
        },
      ],
      product: {
        name: "",
        brand: "",
        image: "",
        price: "",
        types: [],
      },
    };
  },
  computed: {
    productTypesOptions() {
      return this.$store.state.availableProductCategories.map((category) => {
        return {
          text: this.$t(`productTypes.${category}`),
          value: category,
        };
      });
    },
  },
  methods: {
    async handleCreateProduct() {
      const productInfo = {
        shopId: this.$route.params.shopId,
        name: this.product.name,
        brand: this.product.brand,
        image: this.product.image,
        price: this.product.price,
        types: this.product.types,
      };
      await this.$store.dispatch("products/createProduct", productInfo);
      this.$router.push(`/shops/${this.$route.params.shopId}/products`);
    },
    handleCancel() {
      this.$router.push(`/shops/${this.$route.params.shopId}/products`);
    },
  },
};
</script>
