<template>
  <b-container id="page-container" class="my-5">
    <slot></slot>
  </b-container>
</template>

<script>
export default {
  name: "PageContainer"
};
</script>

<style lang="scss">
#page-container {
  min-height: 60vh;
}
</style>
