<template>
  <PageContainer
    :title="$t('shop.shopList')"
    :breadcrumb-items="breadcrumbItems"
  >
    <div class="actions my-2">
      <b-button variant="primary" size="lg" to="/shops/create">
        <b-icon-plus-square />
        {{ $t("shop.createNew") }}
      </b-button>
    </div>

    <div class="shopping-list" v-if="shopsList.length">
      <div class="row">
        <div
          class="col-12 col-lg-6 col-xl-4 mb-3"
          v-for="shop in shopsList"
          :key="shop.id"
        >
          <b-card>
            <ShopDetails :shop="shop" />
            <div class="actions mt-3 pt-3 border-top border-light">
              <b-button
                variant="outline-primary"
                class="mr-2 mb-2"
                :to="`/shops/${shop.id}`"
              >
                <b-icon-info-square />
                {{ $t("shop.viewDetails") }}
              </b-button>
              <b-button
                variant="outline-primary"
                class="mr-2 mb-2"
                :to="`/shops/${shop.id}/edit`"
              >
                <b-icon-pencil-square />
                {{ $t("shop.editDetails") }}
              </b-button>
              <b-button
                class="mr-2 mb-2"
                variant="outline-danger"
                @click="handleShopDelete(shop)"
              >
                <b-icon-x-square />
                {{ $t("shop.delete") }}
              </b-button>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <b-alert show v-else class="m-0">
      {{ $t("shop.listEmpty") }}
    </b-alert>
  </PageContainer>
</template>

<script>
import ShopDetails from "../../components/ShopDetails";
import PageContainer from "../../components/PageContainer";
export default {
  components: {
    PageContainer,
    ShopDetails,
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: this.$t("dashboard.dashboard"),
          to: "/dashboard",
        },
        {
          text: this.$t("shop.shopList"),
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("user/getShops");
  },
  methods: {
    async handleShopDelete(shop) {
      await this.$store.dispatch("user/deleteShop", shop.id);
      await this.$store.dispatch("user/getShops");
    },
  },
  computed: {
    shopsList() {
      return this.$store.state.user.shops;
    },
  },
};
</script>
