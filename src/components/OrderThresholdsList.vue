<template>
  <div class="order-thresholds-list" v-if="$store.state.cart.active">
    <template v-for="threshold in $store.state.cart.active.thresholdsByType">
      <div
        v-if="threshold.totalForType > 0"
        :key="threshold.type"
        class="d-flex"
      >
        <p>
          {{ $t(`productTypes.${threshold.type}`) }}:
          <span
            :class="{
              'bg-danger': threshold.totalForType <= threshold.threshold,
            }"
          >
            <span>{{ $n(threshold.totalForType, "currency") }}</span>
            <span class="text-muted"
              >/ {{ $n(threshold.threshold, "currency") }}</span
            >
          </span>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>
