<template>
  <b-alert variant="danger" :show="hasError" dismissible>
    <p class="my-1">{{ $t(errorMessage) }}.</p>
  </b-alert>
</template>

<script>
export default {
  name: "ErrorAlert",
  computed: {
    hasError() {
      return this.$store.state.requests.error;
    },
    errorMessage() {
      return this.$store.state.requests.errorMessage;
    },
  },
};
</script>
