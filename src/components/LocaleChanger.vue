<template>
  <b-nav-form>
    <b-form-select v-model="$i18n.locale">
      <b-form-select-option
        v-for="lang in languagesList"
        :key="lang"
        :value="lang"
      >
        {{ lang.toUpperCase() }}
      </b-form-select-option>
    </b-form-select>
  </b-nav-form>
</template>

<script>
export default {
  name: "LocaleChanger",
  data() {
    return {
      languagesList: ["es", "en"],
    };
  },
};
</script>
