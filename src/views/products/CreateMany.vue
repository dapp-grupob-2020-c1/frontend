<template>
  <PageContainer>
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="`/shops/${this.$route.params.id}/`">
        {{ $t("shop.viewDetails") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item :to="`/shops/${this.$route.params.id}/products`">
        {{ $t("shop.viewProducts") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active>
        {{ $t("shop.createManyProducts") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.createManyProducts") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />
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
import ErrorAlert from "../../components/ErrorAlert";
import { VueCsvImport } from "vue-csv-import";
import PageContainer from "../../components/PageContainer";

export default {
  name: "ProductsCreate",
  components: { PageContainer, ErrorAlert, VueCsvImport },
  data() {
    return {
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
