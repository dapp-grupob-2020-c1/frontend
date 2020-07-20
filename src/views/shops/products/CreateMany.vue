<template>
  <PageContainer
    :title="$t('shop.createManyProducts')"
    :breadcrumb-items="breadcrumbItems"
  >
    <vue-csv-import
      v-model="parsedProducts"
      autoMatchFields
      autoMatchIgnoreCase
      :loadBtnText="$t('shop.loadCsv')"
      :submitBtnText="$t('shop.loadCsv')"
      :map-fields="['id', 'name', 'brand', 'image', 'price', 'types']"
    >
      <template slot="thead">
        <tr>
          <th>{{ $t("products.field") }}</th>
          <th>{{ $t("products.column") }}</th>
        </tr>
      </template>
    </vue-csv-import>
    <pre>{{ parsedProducts }}</pre>
    <b-button
      @click="handleCreateManyProducts"
      variant="primary"
      :disabled="!parsedProducts.length"
    >
      <b-icon-check2-square />
      {{ $t("products.confirmCreateMany") }}
    </b-button>
  </PageContainer>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";
import PageContainer from "../../../components/PageContainer";

export default {
  components: { PageContainer, VueCsvImport },
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
          to: `/shops/${this.$route.params.shopId}/`
        },
        {
          text: this.$t("shop.viewProducts"),
          to: `/shops/${this.$route.params.shopId}/products`
        },
        {
          text: this.$t("shop.createManyProducts")
        }
      ],
      parsedProducts: []
    };
  },
  methods: {
    handleCreateManyProducts() {
      const formattedProductList = this.parsedProducts
        .filter(prod => prod.id != "id")
        .map(prod => {
          // create a formatted product from CSV loaded one
          const formattedProd = {
            name: prod.name,
            brand: prod.brand,
            image: prod.image,
            price: prod.price,
            types: [prod.types]
          };
          if (prod.id) {
            formattedProd.id = prod.id;
          }
          return formattedProd;
        });
      this.$store.dispatch("products/createManyProducts", formattedProductList);
      this.$router.push(`/shops/${this.$route.params.shopId}/products`);
    },
    handleCancel() {
      this.$router.push(`/shops/${this.$route.params.shopId}/products`);
    }
  }
};
</script>
