<template>
  <div class="order-list-item">
    <div class="row">
      <div class="col">
        <h2 class="h3">{{ $t("order.location") }}</h2>
        <p>{{ order.location.address }}</p>
        <GmapMap
          :center="{
            lat: order.location.latitude,
            lng: order.location.longitude,
          }"
          :zoom="14"
          :options="{
            disableDefaultUI: true,
            fullscreenControl: false,
          }"
          style="width: 100%; height: 300px;"
        >
          <GmapMarker
            :position="{
              lat: order.location.latitude,
              lng: order.location.longitude,
            }"
          />
        </GmapMap>
      </div>
      <div class="col-6">
        <h2 class="h3">{{ $t("order.productsList") }}</h2>
        <div
          v-for="entry in order.entries"
          :key="entry.id"
          class="d-flex align-items-center"
        >
          <div class="flex-shrink-1">{{ entry.quantity }} x</div>
          <ProductDetails :product="entry.product" class="flex-grow-1" />
        </div>
        <p class="lead py-2 my-2 border-top">
          Total:
          <span class="font-weight-bold">
            {{ $n(order.total, "currency") }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetails from "@/components/ProductDetails";
export default {
  components: { ProductDetails },
  props: {
    order: {
      required: true,
      type: Object,
    },
  },
  computed: {},
};
</script>
