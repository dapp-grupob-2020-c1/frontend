<template>
  <PageContainer
    :title="$t('shop.shopList')"
    :breadcrumb-items="breadcrumbItems"
    :request-info="requestInfo"
  >
    <b-list-group v-if="shopsList.length">
      <b-list-group-item v-for="shop in shopsList" :key="shop.id">
        <ShopDetails :shop="shop" />

        <div class="actions mt-3 pt-3 border-top border-light">
          <b-button
            variant="outline-primary"
            class="mr-2"
            :to="`/shops/${shop.id}`"
          >
            <b-icon-info-square />
            {{ $t("shop.viewDetails") }}
          </b-button>
          <b-button
            variant="outline-primary"
            class="mr-2"
            :to="`/shops/${shop.id}/edit`"
          >
            <b-icon-pencil-square />
            {{ $t("shop.editDetails") }}
          </b-button>
          <b-button
            class="mr-2"
            variant="outline-danger"
            @click="handleShopDelete(shop)"
          >
            <b-icon-x-square />
            {{ $t("shop.delete") }}
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-alert show v-else class="m-0">
      {{ $t("shop.listEmpty") }}
    </b-alert>

    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/shops/create">
        <b-icon-plus-square />
        {{ $t("shop.createNew") }}
      </b-button>
    </div>
  </PageContainer>
</template>

<script>
import { deleteShopRequest } from "../../api/shopRequests";
import { getShopsRequest } from "../../api/userRequests";
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";
export default {
  name: "ShopsList",
  components: {
    PageContainer,
    ShopDetails
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard"
        },
        {
          text: this.$t("shop.shopList")
        }
      ],
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
