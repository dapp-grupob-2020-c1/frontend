<template>
  <b-alert variant="danger" :show="!!requestInfo.error" dismissible>
    <p class="my-1">
      {{ $t(requestInfo.errorMessageKey) }}.
      <span v-b-toggle.error-details v-if="requestInfo.errorAdditionalInfo"
        >Ver Detalles.</span
      >
    </p>
    <b-collapse id="error-details" class="mt-2">
      {{ requestInfo.errorAdditionalInfo }}
    </b-collapse>
  </b-alert>
</template>
<script>
export default {
  name: "ErrorAlert",
  props: ["requestInfo"]
};
</script>
