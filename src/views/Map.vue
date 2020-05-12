<template>
  <div class="map">
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
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
