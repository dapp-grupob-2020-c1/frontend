<template>
  <PageContainer>
    <b-breadcrumb>
      <b-breadcrumb-item to="/dashboard">
        {{ $t("dashboard.dashboard") }}
      </b-breadcrumb-item>
      <b-breadcrumb-item active to="/shops">
        {{ $t("shop.shopList") }}
      </b-breadcrumb-item>
    </b-breadcrumb>

    <h1 class="h1">
      {{ $t("shop.shopList") }}
    </h1>

    <ErrorAlert :request-info="requestInfo" />

    <b-list-group v-if="shopsList.length">
      <b-list-group-item v-for="shop in shopsList" :key="shop.id">
        <ShopDetails :shop="shop" />

        <div class="actions my-2">
          <b-button class="mr-2" :to="`/shops/${shop.id}`">
            Detalles
          </b-button>
          <b-button
            class="mr-2"
            variant="outline-danger"
            @click="handleShopDelete(shop)"
          >
            Eliminar
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("shop.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/shops/create">
        {{ $t("shop.createNew") }}
      </b-button>
    </div>
  </PageContainer>
</template>

<script>
import ErrorAlert from "../../components/ErrorAlert";
import { deleteShopRequest } from "../../api/shopRequests";
import { getShopsRequest } from "../../api/userRequests";
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";
export default {
  name: "ShopsList",
  components: { PageContainer, ShopDetails, ErrorAlert },
  data() {
    return {
      requestInfo: {
        loading: false,
        error: false,
        errorMessageKey: "",
        errorAdditionalInfo: ""
      }
    };
  },
  mounted() {
    this.updateShopsList();
  },
  methods: {
    async handleShopDelete(shop) {
      await deleteShopRequest(shop.id);
      await this.updateShopsList();
    },
    async updateShopsList() {
      const updatedShopsList = await getShopsRequest();
      this.$store.commit("user/setShops", updatedShopsList.data);
    }
  },
  computed: {
    shopsList() {
      return this.$store.state.user.shops;
    }
  }
};
</script>
