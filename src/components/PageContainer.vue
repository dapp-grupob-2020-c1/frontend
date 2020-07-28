<template>
  <div class="wrapper">
    <b-card
      class="mb-3 sticky-top py-2"
      bg-variant="secondary"
      text-variant="light"
      no-body
      v-if="showCart && $store.state.cart.active"
    >
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <p class="m-0">
            {{
              $tc(
                "order.productsInCart",
                $store.state.cart.active.entries.length
              )
            }}
            {{ $n($store.state.cart.active.total, "currency") }}
          </p>
          <b-button
            variant="primary"
            to="/orders/finish"
            :disabled="!$store.state.cart.active.entries.length > 0"
          >
            <b-icon-cart />
            {{ $t("order.finishOrder") }}
          </b-button>
        </div>
      </div>
    </b-card>
    <b-container id="page-container" class="my-5">
      <b-breadcrumb :items="breadcrumbItems" v-if="breadcrumbItems" />

      <h1 class="h2" :class="{ 'text-center': centered }" v-if="title">
        {{ title }}
      </h1>

      <p class="lead">{{ subtitle }}</p>

      <ErrorAlert />

      <b-overlay :show="$store.state.requests.loading">
        <slot></slot>
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert";
export default {
  name: "PageContainer",
  components: { ErrorAlert },
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    breadcrumbItems: {
      type: Array,
    },
    requestInfo: {
      type: Object,
    },
    centered: {
      type: Boolean,
    },
    showCart: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
#page-container {
  min-height: 60vh;
}
</style>
