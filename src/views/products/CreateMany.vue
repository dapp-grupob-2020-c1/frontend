<template>
  <PageContainer
    :title="$t('shop.createManyProducts')"
    :breadcrumb-items="breadcrumbItems"
    :request-info="requestInfo"
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
  </PageContainer>
</template>

<script>
import { VueCsvImport } from "vue-csv-import";
import PageContainer from "../../components/PageContainer";

export default {
  name: "ProductsCreate",
  components: { PageContainer, VueCsvImport },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shops.shopList"),
          to: "/shops"
        },
        {
          text: this.$t("shops.viewDetails"),
          to: `/shops/${this.$route.params.id}/`
        },
        {
          text: this.$t("shops.viewProducts"),
          to: `/shops/${this.$route.params.id}/products`
        },
        {
          text: this.$t("shop.createManyProducts")
        }
      ],
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      parsedProducts: []
    };
  },
  computed: {
    productTypes() {
      return this.$store.state.availableProductCategories;
    }
  },
  methods: {
    handleCreateProduct() {
      console.log("create");
    },
    handleCancel() {
      this.$router.back();
    }
  }
};
</script>
