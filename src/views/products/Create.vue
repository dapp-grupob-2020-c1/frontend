<template>
  <PageContainer
    :title="$t('shop.createProduct')"
    :breadcrumb-items="breadcrumbItems"
    :request-info="requestInfo"
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
          required
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
          :options="productTypes"
          name="types"
          stacked
        ></b-form-checkbox-group>
      </b-form-group>

      <b-button
        variant="primary"
        size="lg"
        type="submit"
        :disabled="requestInfo.loading"
      >
        {{ $t("product.submitCreate") }}
      </b-button>
      <b-button variant="text" size="lg" @click="handleCancel">
        {{ $t("product.cancel") }}
      </b-button>
    </form>
  </PageContainer>
</template>

<script>
import { defaultToasterOptions } from "../../config/options";
import { createProductRequest } from "../../api/productsRequests";
import PageContainer from "../../components/PageContainer";

export default {
  name: "ProductsCreate",
  components: { PageContainer },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shop.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shop.viewDetails"),
          to: `/shops/${this.$route.params.id}/`
        },
        {
          text: this.$t("shop.viewProducts"),
          to: `/shops/${this.$route.params.id}/products`
        },
        {
          text: this.$t("shop.createProduct")
        }
      ],
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      product: {
        name: "",
        brand: "",
        image: "",
        price: "",
        types: []
      }
    };
  },
  computed: {
    productTypes() {
      return this.$store.state.availableProductCategories;
    }
  },
  methods: {
    async handleCreateProduct() {
      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };
      try {
        const productData = {
          shopId: this.$route.params.id,
          name: this.product.name,
          brand: this.product.brand,
          image: this.product.image,
          price: this.product.price,
          types: this.product.types
        };
        const response = await createProductRequest(productData);
        console.log(response);
        //this.$store.dispatch("user/addProduct", response.data);
        this.$root.$bvToast.toast(
          this.$t("product.createSuccess"),
          defaultToasterOptions
        );
        this.$router.back();
      } catch (e) {
        console.error(e);
        this.requestInfo.error = true;
        this.requestInfo.errorMessageKey = "app.requestError";
      } finally {
        this.requestInfo.loading = false;
      }
    },
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>
