<template>
  <div class="map" style="display: flex; justify-content: center; align-items: center">
    <GmapMap
      :center="{ lat: -34.7058569, lng: -58.2772947 }"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  components: {}
};
</script>
