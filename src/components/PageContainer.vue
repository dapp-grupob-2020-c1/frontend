<template>
  <b-container id="page-container" class="my-5">
    <b-breadcrumb :items="breadcrumbItems" v-if="breadcrumbItems" />

    <h1 class="h2" :class="{ 'text-center': centered }" v-if="title">
      {{ title }}
    </h1>

    <ErrorAlert :request-info="requestInfo" v-if="requestInfo" />

    <slot></slot>
  </b-container>
</template>

<script>
import ErrorAlert from "./ErrorAlert";
export default {
  name: "PageContainer",
  components: { ErrorAlert },
  props: {
    title: {
      type: String
    },
    breadcrumbItems: {
      type: Array
    },
    requestInfo: {
      type: Object
    },
    centered: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
#page-container {
  min-height: 60vh;
}
</style>
