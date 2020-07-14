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

        <h3 class="h5 mt-2" v-b-toggle.search-options>
          {{ $t("search.searchOptions") }}
        </h3>
        <b-collapse id="search-options">
          <b-form-group label="Ubicación">
            <b-form-radio-group
              id="radio-location"
              v-model="selectedLocation"
              :options="userLocationsList"
              value-field="id"
              text-field="address"
              name="location"
            ></b-form-radio-group>
          </b-form-group>
        </b-collapse>
      </form>
    </b-card>

    <!-- Resultados -->
    <div class="my-3" v-if="searchStarted">
      <h2 class="h3">{{ $t("search.searchResults") }}</h2>

      <b-list-group v-if="searchResults.length">
        <b-list-group-item v-for="product in searchResults" :key="product.name">
          <ProductDetails :product="product" buy />
        </b-list-group-item>
      </b-list-group>
      <b-alert show v-else class="m-0">
        {{ $t("product.listEmpty") }}
      </b-alert>
    </div>
  </b-container>
</template>

<script>
import { searchProductsRequest } from "../api/productsRequests";
import ProductDetails from "../components/ProductDetails";
import ErrorAlert from "../components/ErrorAlert";
export default {
  name: "Search",
  components: { ErrorAlert, ProductDetails },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      },
      searchStarted: false,
      searchQuery: "",
      searchResults: [],
      selectedLocation: null
    };
  },
  mounted() {
    this.selectedLocation = this.userLocationsList[0].id || null;
  },
  computed: {
    userLocationsList() {
      return this.$store.state.user.locations;
    }
  },
  methods: {
    async handleSearch() {
      this.searchStarted = true;
      const searchParams = {
        locationId: this.selectedLocation,
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
