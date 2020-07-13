<template>
  <b-container class="my-5">
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/search">
        {{ $t("search.searchProducts") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("search.searchProducts") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <!-- Search -->
    <b-card>
      <form @submit.prevent="handleSearch">
        <b-input-group>
          <b-form-input
            id="query"
            name="query"
            v-model="searchQuery"
          ></b-form-input>
          <template v-slot:append>
            <b-button block variant="primary" type="submit">
              {{ $t("search.beginSearch") }}
            </b-button>
          </template>
        </b-input-group>
        <div class="search-options mt-3">
          <h3 class="h5">{{ $t("search.searchOptions") }}</h3>
          <p>Opciones</p>
        </div>
      </form>
    </b-card>

    <!-- Resultados -->
    <div class="mb-5">
      <h2 class="h3">{{ $t("search.searchResults") }}</h2>
      <ProductListItem
        v-for="item in searchResults"
        :key="item.id"
        :product="item"
      />
    </div>
  </b-container>
</template>

<script>
import { searchProductsRequest } from "../api/productsRequests";
import ProductListItem from "../components/ProductListItem";
import ErrorAlert from "../components/ErrorAlert";
export default {
  name: "Search",
  components: { ErrorAlert, ProductListItem },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      searchQuery: "",
      searchResults: []
    };
  },
  methods: {
    async handleSearch() {
      const firstLocation = 3;
      const searchParams = {
        locationId: firstLocation,
        keyword: this.searchQuery
      };

      // reset loading state
      this.requestInfo = {
        loading: true,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      };

      try {
        const response = await searchProductsRequest(searchParams);
        this.searchResults = response.data;
      } catch (error) {
        this.requestInfo.error = true;
      } finally {
        this.requestInfo.loading = false;
      }
    }
  }
};
</script>
